package login

import (
	"database/sql"
	"net/http"
	"API/srcs/connectdb"
	"API/srcs/model"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)


func Login(c *gin.Context) {
	if err := c.BindJSON(&model.LoginRequestInstance); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	var dbUsername, dbPassword string
	var score int
	err = db.QueryRow("SELECT username, password, score FROM EMPLOYEE WHERE username = :1", model.LoginRequestInstance.Username).Scan(&dbUsername, &dbPassword, &score)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Username or Password is Incorrect"})
		return
	}
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}
	if score >= 3 {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Account Locked"})
		return
	}

	if model.LoginRequestInstance.Password != dbPassword {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Username or Password is Incorrect"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}

func NavbarAuthority(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	var Author string
	err = db.QueryRow("SELECT ACCESSNO FROM EMPLOYEE, POSITION WHERE PNO = PNUMBER AND USERNAME = :1", model.LoginRequestInstance.Username).Scan(&Author)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Something went wrong!"})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"accessno": Author})
}
