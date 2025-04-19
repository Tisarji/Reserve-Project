package login

import (
	"net/http"
	"API/srcs/database"
	"API/srcs/model"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	if err := c.BindJSON(&model.LoginRequestInstance); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}
	db := database.Connect()

	var dbUsername, dbPassword string
	var score int

	err := db.QueryRow("SELECT username, password, score FROM EMPLOYEE WHERE username = ?", model.LoginRequestInstance.Username).
		Scan(&dbUsername, &dbPassword, &score)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Username or Password is Incorrect"})
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
	db := database.Connect()

	var accessNo string
	err := db.QueryRow(`
		SELECT POSITION.ACCESSNO
		FROM EMPLOYEE
		JOIN POSITION ON EMPLOYEE.PNO = POSITION.PNUMBER
		WHERE EMPLOYEE.USERNAME = ?`,
		model.LoginRequestInstance.Username,
	).Scan(&accessNo)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Something went wrong!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"accessno": accessNo})
}
