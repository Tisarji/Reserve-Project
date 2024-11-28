package management

import (
	"API/srcs/connectdb"
	"API/srcs/model"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/sijms/go-ora/v2"
)

func GetUser(c *gin.Context) {
	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not connect to the database"})
		return
	}
	defer db.Close()

	query := `SELECT ENUMBER, FNAME, LNAME, DNAME, PNAME, SNAME, SCORE 
              FROM EMPLOYEE, DEPARTMENT, POSITION, EMPLOYEE_STATUS 
              WHERE PNO = PNUMBER AND DNO = DNUMBER AND SNO = SNUMBER 
              ORDER BY ENUMBER`

	rows, err := db.Query(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error executing query"})
		return
	}
	defer rows.Close()

	var user_list = []model.UserRequest{}
	for rows.Next() {
		var user model.UserRequest
		err = rows.Scan(&user.ENumber, &user.FName, &user.LName, &user.DName, &user.PName, &user.SName, &user.Score)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error scanning row"})
			return
		}
		user_list = append(user_list, user)
	}

	c.JSON(http.StatusOK, user_list)
}

func AddUser(c *gin.Context) {
	var user model.UserAdd

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection error"})
		return
	}
	defer db.Close()

	var Enumber int
	var Dnumber int
	var Pnumber int
	var Snumber int

	err = db.QueryRow("SELECT DNUMBER FROM DEPARTMENT WHERE DNAME = :1", user.DName).Scan(&Dnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Department not found"})
		return
	}

	err = db.QueryRow("SELECT PNUMBER FROM POSITION WHERE PNAME = :1", user.PName).Scan(&Pnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Position not found"})
		return
	}

	err = db.QueryRow("SELECT SNUMBER FROM EMPLOYEE_STATUS WHERE SNAME = :1", user.SName).Scan(&Snumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Employee status not found"})
		return
	}

	err = db.QueryRow("SELECT MAX(ENUMBER) FROM EMPLOYEE").Scan(&Enumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get new employee number"})
		return
	}
	// newEnum := Enumber + 1

		_, err = db.Exec("INSERT INTO EMPLOYEE VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10)",
			(Enumber + 1), user.FName, user.LName, 0, user.Email, user.Username, user.Password, Dnumber, Pnumber, Snumber)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add user"})
			return
		}

	c.JSON(http.StatusOK, gin.H{"message": "User added successfully."})
}

func EditUser(c *gin.Context) {
	var user model.UserUpdate

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection error"})
		return
	}
	defer db.Close()

	var Dnumber int
	var Pnumber int
	var Snumber int

	err = db.QueryRow("SELECT DNUMBER FROM DEPARTMENT WHERE DNAME = :1", user.DName).Scan(&Dnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Department not found"})
		return
	}

	err = db.QueryRow("SELECT PNUMBER FROM POSITION WHERE PNAME = :1", user.PName).Scan(&Pnumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Position not found"})
		return
	}

	err = db.QueryRow("SELECT SNUMBER FROM EMPLOYEE_STATUS WHERE SNAME = :1", user.SName).Scan(&Snumber)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Employee status not found"})
		return
	}

	_, err = db.Exec(
		"UPDATE EMPLOYEE SET FNAME = :1, LNAME = :2, EMAIL = :3, USERNAME = :4, DNO = :5, PNO = :6, SNO = :7 WHERE ENUMBER = :8",
		user.FName, user.LName, user.Email, user.Username, Dnumber, Pnumber, Snumber, user.ENumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update User"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "User updated successfully."})
}

func DelUser(c *gin.Context) {
	var User_Del model.UserDel

	if err := c.BindJSON(&User_Del); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to database"})
		return
	}
	defer db.Close()

	_, err = db.Exec(`DELETE FROM EMPLOYEE WHERE ENUMBER = :1`, User_Del.ENumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into database"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}

func ClearScore(c *gin.Context) {
	var user model.ResetUserScore

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db, err := connectdb.ConnectDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection error"})
		return
	}
	defer db.Close()

	_, err = db.Exec(
		`UPDATE EMPLOYEE SET SCORE = 0 WHERE ENUMBER = :1`, user.Usernumber)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update User"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Reset user score successfully."})
}
