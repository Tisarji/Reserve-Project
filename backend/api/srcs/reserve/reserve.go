package reserve

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func AddBooking(c *gin.Context) {
	var Booking model.AddBooking
	if err := c.BindJSON(&Booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not connect to the database"})
		return
	}
	defer db.Close()

	var Booking_number int
	var Employee_number int
	var new_Booking_number int
	var Bookinglist_number int
	var new_Bookinglist_number int
	err = db.QueryRow("SELECT MAX(BKNUMBER) FROM BOOKING").Scan(&Booking_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "NO Booking no"})
		return
	}
	new_Booking_number = Booking_number + 1
	err = db.QueryRow("SELECT MAX(BKLNUMBER) FROM BOOKING_LIST").Scan(&Bookinglist_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "NO Bookinglist no"})
		return
	}
	new_Bookinglist_number = Bookinglist_number + 1

	err = db.QueryRow(`SELECT ENUMBER FROM EMPLOYEE WHERE USERNAME = :1`, model.LoginRequestInstance.Username).Scan(&Employee_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No Employee no"})
		return
	}

	_, err = db.Exec(`INSERT INTO BOOKING VALUES (:1, SYSDATE, :2)`, new_Booking_number, Employee_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add user"})
		return
	}

	var Room_number int
	var Status_number int
	err = db.QueryRow(`SELECT RNUMBER FROM ROOM WHERE RNAME = :1`, Booking.Room_name).Scan(&Room_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "NO room no"})
		return
	}

	err = db.QueryRow(`SELECT SNUMBER FROM BOOKING_STATUS WHERE SNAME = :1`, Booking.Status_name).Scan(&Status_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "NO status no"})
		return
	}

	_, err = db.Exec(`INSERT INTO BOOKING_LIST VALUES (:1, :2, :3,TO_DATE(:4, 'DD/MM/YYYY'), :5, :6, :7, :8, :9)`, new_Bookinglist_number, new_Booking_number, Room_number, Booking.Start_date, Booking.Start_time, Booking.End_time, Booking.Details, new_Booking_number+new_Bookinglist_number, Status_number)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Booking Successfully"})
}

func GetBooking(c *gin.Context) {
	var Booking_list = []model.Booking_list{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query(`select bklnumber as bookinglist_number, bknumber as booking_number, rno as room_number, rname as room_name, details, to_char(bkdate, 'dd/mm/yyyy') as start_date, start_time, end_time, sno as status_number, sname as status_name, eno as employee_number
from booking, booking_list, booking_status, room
where bknumber = bklno and rno = rnumber and sno = snumber and username = :1 order by bookinglist_number;`, model.LoginRequestInstance.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var Booking model.Booking_list
		if err := rows.Scan(&Booking.Booking_number, &Booking.Booking_number, &Booking.Room_name, &Booking.Details, &Booking.Start_date, &Booking.Start_time, &Booking.End_time, &Booking.Status_number, &Booking.Status_name, &Booking.Employee_number); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		Booking_list = append(Booking_list, Booking)
	}
	c.JSON(http.StatusOK, Booking_list)
}
