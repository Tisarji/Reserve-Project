package master

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Edit_Department(c *gin.Context) {
	var Department_Edit model.DepartmentRequest

	if err := c.BindJSON(&Department_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE DEPARTMENT SET DNAME = :1 WHERE DNUMBER = :2`, Department_Edit.Name, Department_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Department edited successfully"})
}

func Edit_Position(c *gin.Context) {
	var Position_Edit model.PositionRequest

	if err := c.BindJSON(&Position_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE POSITION SET PNAME = :1, ACCESSNO = :2 WHERE PNUMBER = :3`, Position_Edit.Name, Position_Edit.Accessno, Position_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Position edited successfully"})
}

func Edit_Building(c *gin.Context) {
	var Building_Edit model.BuildingRequest

	if err := c.BindJSON(&Building_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE BUILDING SET BNAME = :1 WHERE BNUMBER = :2`, Building_Edit.Name, Building_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}

	newFloorCount, err := strconv.Atoi(Building_Edit.Floornum)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Floornum must be a valid number"})
		return
	}

	var currentFloorCount int
	err = db.QueryRow("SELECT COUNT(FLNUMBER) FROM FLOOR WHERE BNO = :1", Building_Edit.ID).Scan(&currentFloorCount)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve current floor count"})
		return
	}

	if newFloorCount < currentFloorCount {
		_, err = db.Exec(`DELETE FROM FLOOR WHERE BNO = :1 AND FLNAME > :2`, Building_Edit.ID, newFloorCount)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete extra floors"})
			return
		}
	}

	if newFloorCount > currentFloorCount {
		var maxFloorNumber int
		err = db.QueryRow("SELECT MAX(FLNUMBER) FROM FLOOR").Scan(&maxFloorNumber)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve max floor number"})
			return
		}
		currentFloorNumber := maxFloorNumber + 1

		for floor := currentFloorCount + 1; floor <= newFloorCount; floor++ {
			_, err := db.Exec(`INSERT INTO FLOOR (FLNUMBER, FLNAME, BNO) VALUES (:1, :2, :3)`, currentFloorNumber, floor, Building_Edit.ID)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert new floor data"})
				return
			}
			currentFloorNumber++
		}
	}
	c.JSON(http.StatusOK, gin.H{"message": "Building and floors edited successfully"})
}

func Edit_EmpStatus(c *gin.Context) {
	var Status_Edit model.StatusRequest

	if err := c.BindJSON(&Status_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE EMPLOYEE_STATUS SET SNAME = :1 WHERE SNUMBER = :2`, Status_Edit.Name, Status_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Employee Status edited successfully"})
}

func Edit_RoomStatus(c *gin.Context) {
	var Status_Edit model.StatusRequest

	if err := c.BindJSON(&Status_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE ROOM_STATUS SET SNAME = :1 WHERE SNUMBER = :2`, Status_Edit.Name, Status_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Room Status edited successfully"})
}

func Edit_BookingStatus(c *gin.Context) {
	var Status_Edit model.StatusRequest

	if err := c.BindJSON(&Status_Edit); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`UPDATE BOOKING_STATUS SET SNAME = :1 WHERE SNUMBER = :2`, Status_Edit.Name, Status_Edit.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Booking Status edited successfully"})
}
