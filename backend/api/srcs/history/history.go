package history

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetBookingHistory(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query(`select bklnumber as bookinglist_number, bknumber as booking_number, rno as room_number, rname as room_name, details, to_char(bkdate, 'dd/mm/yyyy') as start_date, start_time, end_time, sno as status_number, sname as status_name, eno as employee_number
	from booking, booking_list, booking_status, room
	where bknumber = bklno and rno = rnumber and sno = snumber order by bookinglist_number`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookingHistories []model.BookingHistory

	for rows.Next() {
		var bh model.BookingHistory
		if err := rows.Scan(&bh.Bookinglist_number, &bh.Booking_number, &bh.Room_number, &bh.Room_name, &bh.Details, &bh.Start_date, &bh.Start_time, &bh.End_time, &bh.Status_number, &bh.Status_name, &bh.Employee_number); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookingHistories = append(bookingHistories, bh)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookingHistories)
}

func CancelStatus(c *gin.Context) {
	var cancel model.HistoryChange

	if err := c.BindJSON(&cancel); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE BOOKING_LIST SET SNO = 4 WHERE BKLNUMBER = :1 AND BKNUMBER = :2`, cancel.Bookinglist_number, cancel.Booking_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Status Changed successfully"})
}
