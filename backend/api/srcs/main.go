package main

// go get -u github.com/gin-contrib/cors
// go get -u github.com/gin-gonic/gin
// go get -u github.com/sijms/go-ora/v2

import (
	"API/srcs/history"
	"API/srcs/report"
	"os"

	"API/srcs/login"
	"API/srcs/management"
	"API/srcs/master"
	"API/srcs/profile"
	"API/srcs/reserve"
	"API/srcs/verify"

	"API/srcs/database"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database.InitDB()

	r := gin.Default()
	r.Use(cors.Default())

	r.POST("/api/login", login.Login)
	r.GET("/api/navbar", login.NavbarAuthority)

	r.GET("/api/profile", profile.Profile)

	r.GET("/api/department", master.Get_Department)
	r.GET("/api/getposition", master.Get_Position)
	r.GET("/api/getbuilding", master.Get_Building)
	r.GET("/api/getempstatus", master.Get_EmpStatus)
	r.GET("/api/getroomstatus", master.Get_RoomStatus)
	r.GET("/api/getbookingstatus", master.Get_BookingStatus)
	r.POST("/api/adddepartment", master.Add_Department)
	r.POST("/api/addposition", master.Add_Position)
	r.POST("/api/addbuilding", master.Add_Building)
	r.POST("/api/addemp-status", master.Add_EmpStatus)
	r.POST("/api/addroom-status", master.Add_RoomStatus)
	r.POST("/api/addbooking-status", master.Add_BookingStatus)
	r.PUT("api/editdepartment", master.Edit_Department)
	r.PUT("api/editposition", master.Edit_Position)
	r.PUT("api/editbuilding", master.Edit_Building)
	r.PUT("api/editemp-status", master.Edit_EmpStatus)
	r.PUT("api/editroom-status", master.Edit_RoomStatus)
	r.PUT("api/editbooking-status", master.Edit_BookingStatus)
	r.DELETE("api/deldepartment", master.Del_Department)
	r.DELETE("api/delposition", master.Del_Position)
	r.DELETE("api/delbuilding", master.Del_Building)
	r.DELETE("api/delemp-status", master.Del_EmpStatus)
	r.DELETE("api/delroom-status", master.Del_RoomStatus)
	r.DELETE("api/delbooking-status", master.Del_BookingStatus)

	r.GET("/api/verify", verify.Verify)
	r.GET("/api/show_bookinglist", verify.Show_bookinglist)
	r.PUT("/api/verifychange", verify.ChangeStatus)

	r.GET("/api/getrooms", management.GetRoom)
	r.POST("/api/addrooms", management.AddRoom)
	r.PUT("/api/editrooms", management.EditRoom)
	r.DELETE("/api/delrooms", management.DelRoom)
	r.GET("/api/getuser", management.GetUser)
	r.POST("/api/adduser", management.AddUser)
	r.PUT("/api/edituser", management.EditUser)
	r.DELETE("/api/deluser", management.DelUser)

	r.GET("/api/bookinghistory", history.GetBookingHistory) //
	r.PUT("api/cancelbooking", history.CancelStatus)        //

	r.GET("/api/overview1", report.Overview1)
	r.GET("/api/overview2", report.Overview2)
	r.GET("/api/overview3", report.Overview3)
	r.GET("/api/graph1", report.Graph1)
	r.GET("/api/graph2", report.Graph2)
	r.GET("/api/graph3", report.Graph3)

	r.POST("/api/addbooking", reserve.AddBooking)
	// r.GET("/api/getbooking", reserve.GetBooking)

	r.Run(":8080")
	_ = os.Remove("./dev.db")
}
