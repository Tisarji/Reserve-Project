package master

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Del_Department(c *gin.Context) {
	var Department_Del model.DepartmentDel

	if err := c.BindJSON(&Department_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM DEPARTMENT WHERE DNUMBER = :1`, Department_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Department deleted successfully"})
}

func Del_Position(c *gin.Context) {
	var Position_Del model.PositionDel

	if err := c.BindJSON(&Position_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM POSITION WHERE PNUMBER = :1`, Position_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Position deleted successfully"})
}

func Del_Building(c *gin.Context) {
	var Building_Del model.BuildingDel

	if err := c.BindJSON(&Building_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM FLOOR WHERE BNO = :1`, Building_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	_, err = db.Exec(`DELETE FROM BUILDING WHERE BNUMBER = :1`, Building_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Building deleted successfully"})
}

func Del_EmpStatus(c *gin.Context) {
	var Status_Del model.StatusDel

	if err := c.BindJSON(&Status_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM EMPLOYEE_STATUS WHERE SNUMBER = :1`, Status_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Employee Status deleted successfully"})
}

func Del_RoomStatus(c *gin.Context) {
	var Status_Del model.StatusDel

	if err := c.BindJSON(&Status_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM ROOM_STATUS WHERE SNUMBER = :1`, Status_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Room Status deleted successfully"})
}

func Del_BookingStatus(c *gin.Context) {
	var Status_Del model.StatusDel

	if err := c.BindJSON(&Status_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM BOOKING_STATUS WHERE SNUMBER = :1`, Status_Del.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Booking Status deleted successfully"})
}
