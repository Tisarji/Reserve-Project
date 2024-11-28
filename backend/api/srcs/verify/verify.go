package verify

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Verify(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("select bklnumber, rname, details, to_char(start_date, 'dd/mm/yyyy'), start_time, end_time from booking_list, room where rno = rnumber and vip = 1 ORDER BY BKLNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.VerifyRequest

	for rows.Next() {
		var verify model.VerifyRequest
		if err := rows.Scan(&verify.Bkl, &verify.Room, &verify.Details, &verify.Date, &verify.Time_S, &verify.Time_E); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, verify)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings) 
}

func Show_bookinglist(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("select booking_list.BKLNO, booking_list.BKLNUMBER, room.RNAME, booking_list.START_DATE, booking_list.START_TIME, booking_list.END_TIME, booking_list.DETAILS, booking_list.QR, booking_status.SNAME from booking_list, booking_status, room where booking_list.RNO = room.RNUMBER and booking_list.SNO = booking_status.SNUMBER ORDER BY BKLNO")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to execute query"})
		return
	}
	defer rows.Close()

	var bookings []model.VerifyRequest

	for rows.Next() {
		var verify model.VerifyRequest
		if err := rows.Scan(&verify.ID, &verify.Number, &verify.Room, &verify.Date, &verify.Time_S, &verify.Time_E, &verify.Details, &verify.QR, &verify.Status); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to scan row"})
			return
		}
		bookings = append(bookings, verify)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error iterating over rows"})
		return
	}

	c.JSON(http.StatusOK, bookings)
}

func ChangeStatus(c *gin.Context) {
	var verify model.VerifyChange

	if err := c.BindJSON(&verify); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	var status int
	err = db.QueryRow(`SELECT SNUMBER FROM BOOKING_STATUS WHERE SNAME = :1`,verify.SName).Scan(&status)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "No Status Row"})
		return
	}

	_, err = db.Exec(`UPDATE BOOKING_LIST SET SNO = :1 WHERE BKLNUMBER = :2`, status, verify.Bkl)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Status Changed successfully"})
}
