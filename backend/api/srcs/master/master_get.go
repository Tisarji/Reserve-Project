package master

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Get_Department(c *gin.Context) {
	var Department_List = []model.DepartmentRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT DNUMBER, DNAME FROM DEPARTMENT order by dnumber")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var department model.DepartmentRequest
		if err := rows.Scan(&department.ID, &department.Name); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Dname"})
			return
		}
		Department_List = append(Department_List, department)
	}
	c.JSON(http.StatusOK, Department_List)
}

func Get_Position(c *gin.Context) {
	var Position_List = []model.PositionRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM POSITION ORDER BY PNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var position model.PositionRequest
		if err := rows.Scan(&position.ID, &position.Name, &position.Accessno); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		Position_List = append(Position_List, position)
	}
	c.JSON(http.StatusOK, Position_List)
}

func Get_Building(c *gin.Context) {
	var Building_List = []model.BuildingRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM BUILDING ORDER BY BNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var building model.BuildingRequest
		if err := rows.Scan(&building.ID, &building.Name); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		err = db.QueryRow("SELECT COUNT(FLNUMBER) FROM FLOOR, Building WHERE BNUMBER = BNO AND BNAME = :1", building.Name).Scan(&building.Floornum)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Department not found"})
			return
		}
		Building_List = append(Building_List, building)
	}
	c.JSON(http.StatusOK, Building_List)
}

func Get_EmpStatus(c *gin.Context) {
	var Status_List = []model.StatusRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM EMPLOYEE_STATUS ORDER BY SNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var status model.StatusRequest
		if err := rows.Scan(&status.ID, &status.Name); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		Status_List = append(Status_List, status)
	}
	c.JSON(http.StatusOK, Status_List)
}

func Get_RoomStatus(c *gin.Context) {
	var Status_List = []model.StatusRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM ROOM_STATUS ORDER BY SNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var status model.StatusRequest
		if err := rows.Scan(&status.ID, &status.Name); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		Status_List = append(Status_List, status)
	}
	c.JSON(http.StatusOK, Status_List)
}

func Get_BookingStatus(c *gin.Context) {
	var Status_List = []model.StatusRequest{}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM BOOKING_STATUS ORDER BY SNUMBER")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	for rows.Next() {
		var status model.StatusRequest
		if err := rows.Scan(&status.ID, &status.Name); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		Status_List = append(Status_List, status)
	}
	c.JSON(http.StatusOK, Status_List)
}
