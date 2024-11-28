package profile

import (
	"database/sql"
	"net/http"
	"API/srcs/connectdb"
	"API/srcs/model"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func Profile(c *gin.Context) {
	var profile model.ProfileRequest

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()
	err = db.QueryRow("SELECT ENUMBER, FNAME, LNAME, EMAIL, DNO, PNO, SNO, SCORE FROM EMPLOYEE WHERE USERNAME = :1", model.LoginRequestInstance.Username).Scan(
		&profile.Enumber,
		&profile.FName,
		&profile.LName,
		&profile.Email,
		&profile.DNO,
		&profile.PNO,
		&profile.SNO,
		&profile.Score,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"error": "No employee found with that username"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}
	c.JSON(http.StatusOK, profile)
}
