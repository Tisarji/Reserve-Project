package connectdb

import (
	"database/sql"

	_ "github.com/sijms/go-ora/v2"
)

// Helper function to connect to the database
func ConnectDB() (*sql.DB, error) {
	dsn := "oracle://db671047:19520@203.188.54.7:1521/database"
	return sql.Open("oracle", dsn)
}
