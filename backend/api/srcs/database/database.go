package database

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

var DB *sqlx.DB

func InitDatabase() {
	var err error

	DB, err = sqlx.Open("sqlite3", "./dev.db")
	if err != nil {
		log.Fatalln("Failed to connect to SQLite:", err)
	}
	DB.Exec("PRAGMA foreign_keys = ON;")
	DB.Exec("PRAGMA foreign_key_check;")

	// Execute init-table.sql
	sqlBytes, err := os.ReadFile("srcs/database/init-table.sql")
	if err != nil {
		log.Fatalln("Failed to read SQL file:", err)
	}
	_, err = DB.Exec(string(sqlBytes))
	if err != nil {
		log.Fatalln("Failed to execute SQL script:", err)
	}

	// Execute init-data.sql
	insertBytes, err := os.ReadFile("srcs/database/init-data.sql")
	if err != nil {
		log.Fatalln("Failed to read init-data.sql file:", err)
	}
	_, err = DB.Exec(string(insertBytes))
	if err != nil {
		log.Fatalln("Failed to execute init-data.sql script:", err)
	}

	fmt.Println("Database initialized successfully.")
}
