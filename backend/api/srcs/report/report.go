package report

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Overview1(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	query := `
		select count(temp.eno)
		from (
    		select distinct booking.eno, to_char(booking_list.START_DATE,'dd-mm-yyyy')
    		from booking, booking_list
    		where booking.bknumber = booking_list.bklno
    		and to_char(booking_list.start_date,'yyyy-mm-dd') = to_char(sysdate, 'YYYY-MM-DD')
		) temp
	`
	rows, err := db.Query(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.ReportRequest

	for rows.Next() {
		var report model.ReportRequest
		if err := rows.Scan(&report.Booking_Number); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings)
}

func Overview2(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("select count(room.rnumber) from room where rsno = 1")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.ReportRequest

	for rows.Next() {
		var report model.ReportRequest
		if err := rows.Scan(&report.Booking_Open); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings)
}

func Overview3(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("select count(room.rnumber) from room where rsno != 1")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.ReportRequest

	for rows.Next() {
		var report model.ReportRequest
		if err := rows.Scan(&report.Booking_Close); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings)
}

func Graph1(c *gin.Context) {
	date := c.Query("date")
	room := c.Query("room")

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	query := `
		SELECT to_char(booking_list.start_date, 'dd'), count(booking_list.bklnumber)
    	FROM booking_list 
    	WHERE to_char(booking_list.start_date, 'yyyy-mm') = :1 AND booking_list.rno = :2
    	GROUP BY to_char(booking_list.start_date, 'dd')
		order by to_char(booking_list.start_date,'dd')`

	rows, err := db.Query(query, date, room)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error executing query", "details": err.Error()})
		return
	}
	defer rows.Close()

	var bookings []model.ReportSelect

	for rows.Next() {
		var report model.ReportSelect
		if err := rows.Scan(&report.Day, &report.Using_Room); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}
	c.JSON(http.StatusOK, bookings)
}

func Graph2(c *gin.Context) {
	date := c.Query("date")
	room := c.Query("room")

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	query := `
		select room.rname, temp1.Using_Room, temp2.Canceling_Room
		from room, (
			select booking_list.rno, count(booking_list.rno) as Using_Room
    		from booking_list
    		where (booking_list.bklnumber, booking_list.bklno) in (
        	select access_list.bklno, access_list.bkno
        	from access_list
    	)
    	and to_char(booking_list.start_date,'yyyy-mm') = :1
    	and booking_list.rno = :2
    	group by booking_list.rno
		) temp1, (      
        	select booking_list.rno, count(booking_list.rno) as Canceling_Room
    		from booking_list
    		where (booking_list.bklnumber, booking_list.bklno) in (
        	select cancel_booking.bklno, cancel_booking.bkno
        	from cancel_booking
        )
    	and to_char(booking_list.start_date,'yyyy-mm') = :1
    	and booking_list.rno = :2
    	group by booking_list.rno
		) temp2
		where room.rnumber = temp1.rno and room.rnumber = temp2.rno`

	rows, err := db.Query(query, date, room)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.ReportSelect

	for rows.Next() {
		var report model.ReportSelect
		if err := rows.Scan(&report.Room, &report.Using_Room, &report.Cancel); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}

	c.JSON(http.StatusOK, bookings)
}

func Graph3(c *gin.Context) {
	date := c.Query("date")

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	query := `
		select department.dname, count(lock_list.eno)
		from department
		left outer join employee on department.DNUMBER = employee.DNO
		left outer join lock_list on employee.ENUMBER = lock_list.ENO
		and to_char(lock_list.lkdate,'yyyy-mm') = :1
		group by department.dname, department.dnumber
		order by department.dnumber`

	rows, err := db.Query(query, date)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.ReportSelect

	for rows.Next() {
		var report model.ReportSelect
		if err := rows.Scan(&report.Department, &report.Lock); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, report)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings)
}