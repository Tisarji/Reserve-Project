package database

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

var DB *sqlx.DB

func InitDB() {

	_ = os.Remove("./dev.db")

	var err error
	DB, err = sqlx.Open("sqlite3", "./dev.db")
	if err != nil {
		log.Fatalln("Failed to connect to SQLite:", err)
	}
	DB.Exec("PRAGMA foreign_keys = ON;")

	schemaBytes, err := os.ReadFile("srcs/database/schema/init-table.sql")
	if err != nil {
		log.Fatalln("Failed to read init-table.sql:", err)
	}
	_, err = DB.Exec(string(schemaBytes))
	if err != nil {
		log.Fatalf("Failed to execute init-table.sql: %v", err)
	}

	dataBytes, err := os.ReadFile("srcs/database/schema/init-data.sql")
	if err != nil {
		log.Fatalln("Failed to read init-data.sql:", err)
	}
	_, err = DB.Exec(string(dataBytes))
	if err != nil {
		log.Fatalf("Failed to execute init-data.sql: %v", err)
	}

	rows, err := DB.Queryx("PRAGMA foreign_key_check;")
	if err != nil {
		log.Fatalln("Foreign key check failed:", err)
	}
	defer rows.Close()

	hasViolation := false
	for rows.Next() {
		var table string
		var rowid int
		var parent string
		var fkid int
		rows.Scan(&table, &rowid, &parent, &fkid)
		log.Printf("FK violation: table=%s, rowid=%d, parent=%s, fkid=%d\n", table, rowid, parent, fkid)
		hasViolation = true
	}
	if hasViolation {
		log.Fatalln("FK violations found. Aborting.")
	}
	fmt.Println("Database initialized successfully.")
}

func Connect() *sqlx.DB {
	if DB == nil {
		log.Fatalln("Database not initialized. Call InitDB() first.")
	}
	return DB
}
