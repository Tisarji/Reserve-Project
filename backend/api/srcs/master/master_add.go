package master

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Add_Department(c *gin.Context) {
	var Department_Add model.DepartmentAdd
	if err := c.BindJSON(&Department_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT MAX(DNUMBER) FROM DEPARTMENT")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var count int
	if rows.Next() {
		rows.Scan(&count)
	}
	_, err = db.Exec(`INSERT INTO DEPARTMENT (DNUMBER, DNAME) VALUES (:1, :2)`, count+1, Department_Add.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Department added successfully"})
}

func Add_Position(c *gin.Context) {
	var Position_Add model.PositionAdd
	if err := c.BindJSON(&Position_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT MAX(PNUMBER) FROM POSITION")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var count int
	if rows.Next() {
		rows.Scan(&count)
	}

	_, err = db.Exec(`INSERT INTO POSITION (PNUMBER, PNAME, ACCESSNO) VALUES (:1, :2, :3)`, count+1, Position_Add.Name, Position_Add.Accessno)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Position added successfully"})
}

func Add_Building(c *gin.Context) {
	var Building_Add model.BuildingAdd
	if err := c.BindJSON(&Building_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	var maxBuildingNumber int
	err = db.QueryRow("SELECT MAX(BNUMBER) FROM BUILDING").Scan(&maxBuildingNumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	newBuildingNumber := maxBuildingNumber + 1

	_, err = db.Exec(`INSERT INTO BUILDING (BNUMBER, BNAME) VALUES (:1, :2)`, newBuildingNumber, Building_Add.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	
	floorCount, err := strconv.Atoi(Building_Add.Floornum)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "FloorCount must be a valid number"})
		return
	}

	var maxFloorNumber int
	err = db.QueryRow("SELECT MAX(FLNUMBER) FROM FLOOR").Scan(&maxFloorNumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve max floor number"})
		return
	}
	currentFloorNumber := maxFloorNumber + 1

	for floor := 1; floor <= floorCount; floor++ {
		_, err := db.Exec(`INSERT INTO FLOOR (FLNUMBER, FLNAME, BNO) VALUES (:1, :2, :3)`, currentFloorNumber, floor, newBuildingNumber)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert floor data"})
			return
		}
		currentFloorNumber++
	}
	c.JSON(http.StatusOK, gin.H{"message": "Building added successfully"})
}

func Add_EmpStatus(c *gin.Context) {
	var Status_Add model.StatusAdd
	if err := c.BindJSON(&Status_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT MAX(SNUMBER) FROM EMPLOYEE_STATUS")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var count int
	if rows.Next() {
		rows.Scan(&count)
	}

	_, err = db.Exec(`INSERT INTO EMPLOYEE_STATUS (SNUMBER, SNAME) VALUES (:1, :2)`, count+1, Status_Add.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Employee Status added successfully"})
}

func Add_RoomStatus(c *gin.Context) {
	var Status_Add model.StatusAdd
	if err := c.BindJSON(&Status_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT MAX(SNUMBER) FROM ROOM_STATUS")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var count int
	if rows.Next() {
		rows.Scan(&count)
	}

	_, err = db.Exec(`INSERT INTO ROOM_STATUS (SNUMBER, SNAME) VALUES (:1, :2)`, count+1, Status_Add.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Room Status added successfully"})
}

func Add_BookingStatus(c *gin.Context) {
	var Status_Add model.StatusAdd
	if err := c.BindJSON(&Status_Add); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT MAX(SNUMBER) FROM BOOKING_STATUS")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var count int
	if rows.Next() {
		rows.Scan(&count)
	}

	_, err = db.Exec(`INSERT INTO BOOKING_STATUS (SNUMBER, SNAME) VALUES (:1, :2)`, count+1, Status_Add.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Booking Status added successfully"})
}
