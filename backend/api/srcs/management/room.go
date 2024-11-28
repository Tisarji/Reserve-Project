package management

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func GetRoom(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not connect to the database"})
		return
	}
	defer db.Close()

	query := `
	SELECT RNUMBER, RNAME, BNAME, FLNAME, SNAME, VIP, CAPACITY
	FROM ROOM, ROOM_STATUS, BUILDING, FLOOR
	WHERE RSNO = SNUMBER AND FLNUMBER = FLNO AND BNO = BNUMBER ORDER BY RNUMBER`

	rows, err := db.Query(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error executing query", "details": err.Error()})
		return
	}
	defer rows.Close()

	var rooms []model.RoomGet
	for rows.Next() {
		var room model.RoomGet
		err = rows.Scan(&room.RNumber, &room.RName, &room.BName, &room.FLName, &room.SName, &room.VIP, &room.Capacity)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning row"})
			return
		}
		rooms = append(rooms, room)
	}

	c.JSON(http.StatusOK, rooms)
}

func AddRoom(c *gin.Context) {
	var room model.RoomAdd

	if err := c.BindJSON(&room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection error"})
		return
	}
	defer db.Close()

	var bnumber int
	var flnumber int
	var snumber int
	var newRNumber int

	err = db.QueryRow("SELECT bnumber FROM building WHERE bname = :1", room.BName).Scan(&bnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Building not found"})
		return
	}

	err = db.QueryRow("SELECT FLNUMBER FROM FLOOR, BUILDING WHERE BNO = BNUMBER AND FLNAME = :1 AND BNO = :2", room.FLName, bnumber).Scan(&flnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Floor not found"})
		return
	}

	err = db.QueryRow("SELECT SNUMBER FROM ROOM_STATUS WHERE SNAME = :1", room.SName).Scan(&snumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Room status not found"})
		return
	}

	err = db.QueryRow("SELECT MAX(RNUMBER) FROM ROOM").Scan(&newRNumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get new room number"})
		return
	}

	_, err = db.Exec("INSERT INTO ROOM (RNUMBER, RNAME, CAPACITY, VIP, FLNO, RSNO) VALUES (:1, :2, :3, :4, :5, :6)",
		(newRNumber + 1), room.RName, room.Capacity, room.VIP, flnumber, snumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add room"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Room added successfully."})
}

func EditRoom(c *gin.Context) {
	var room model.RoomGet

	if err := c.BindJSON(&room); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection error"})
		return
	}
	defer db.Close()

	var bnumber int
	var flnumber int
	var snumber int

	err = db.QueryRow("SELECT bnumber FROM building WHERE bname = :1", room.BName).Scan(&bnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Building not found"})
		return
	}

	err = db.QueryRow("SELECT flnumber FROM floor WHERE bno = :1 AND flname = :2", bnumber, room.FLName).Scan(&flnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Floor not found"})
		return
	}

	err = db.QueryRow("SELECT snumber FROM room_status WHERE sname = :1", room.SName).Scan(&snumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Room status not found"})
		return
	}

	if flnumber > 0 {
		_, err = db.Exec(
			"UPDATE room SET rname = :1, vip = :2, flno = :3, capacity = :4, RSNO = :5 WHERE rnumber = :6",
			room.RName, room.VIP, flnumber, room.Capacity, snumber, room.RNumber,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update room"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Room updated successfully."})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid floor number"})
	}
}

func DelRoom(c *gin.Context) {
	var Room_Del model.RoomDel

	if err := c.BindJSON(&Room_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM ROOM WHERE RNUMBER = :1`, Room_Del.RNumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Booking Status deleted successfully"})
}
