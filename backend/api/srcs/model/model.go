package model

type LoginRequest struct {
	Username string `json:"Username"`
	Password string `json:"Password"`
}

var LoginRequestInstance LoginRequest

type ProfileRequest struct {
	Enumber int    `json:"enumber"`
	FName   string `json:"fname"`
	LName   string `json:"lname"`
	Email   string `json:"email"`
	Score   int    `json:"score"`
	DNO     int    `json:"department_number"` // Department
	PNO     int    `json:"position_number"`   // Position
	SNO     int    `json:"status_number"`     // Status Working | Not Working
}

type VerifyRequest struct {
	ID      string `json:"bklnumber"`
	Number  string `json:"bklno"`
	Bkl     string `json:"bklnumber"`
	Room    string `json:"rname"`
	Details string `json:"details"`
	Date    string `json:"start_date"`
	Time_S  string `json:"start_time"`
	Time_E  string `json:"end_time"`
	QR      string `json:"qr"`
	Status  string `json:"status"`
}

type VerifyChange struct {
	Bkl   string `json:"bklnumber"`
	SName string `json:"sname"`
}

type DepartmentRequest struct {
	ID   string `json:"dnumber"`
	Name string `json:"dname"`
}

type PositionRequest struct {
	ID       string `json:"pnumber"`
	Name     string `json:"pname"`
	Accessno string `json:"accessno"`
}

type BuildingRequest struct {
	ID       string `json:"bnumber"`
	Name     string `json:"bname"`
	Floornum string `json:"flnum"`
}

type StatusRequest struct {
	ID   string `json:"snumber"`
	Name string `json:"sname"`
}

type DepartmentAdd struct {
	Name string `json:"dname"`
}

type PositionAdd struct {
	Name     string `json:"pname"`
	Accessno string `json:"accessno"`
}

type BuildingAdd struct {
	Name     string `json:"dname"`
	Floornum string `json:"flnum"`
}

type StatusAdd struct {
	Name string `json: "sname"`
}
type RoomGet struct {
	RNumber  string `json:"rnumber"`
	RName    string `json:"rname"`
	BName    string `json:"bname"`
	FLName   string `json:"flname"`
	SName    string `json:"sname"`
	VIP      string `json:"vip"`
	Capacity string `json:"capacity"`
}

type RoomAdd struct {
	RName    string `json:"rname"`
	BName    string `json:"bname"`
	FLName   string `json:"flname"`
	SName    string `json:"sname"`
	VIP      string `json:"vip"`
	Capacity string `json:"capacity"`
}

type RoomUpdate struct {
	RName    string `json:"rname"`
	BName    string `json:"bname"`
	FLName   string `json:"flname"`
	SName    string `json:"sname"`
	VIP      string `json:"vip"`
	Capacity string `json:"capacity"`
}

type RoomDel struct {
	RNumber string `json:"rnumber"`
}

type UserRequest struct {
	ENumber string `json:"enumber"`
	FName   string `json:"fname"`
	LName   string `json:"lname"`
	DName   string `json:"dname"`
	PName   string `json:"pname"`
	SName   string `json:"sname"`
	Score   string `json:"score"`
}

type UserAdd struct {
	FName    string `json:"fname"`
	LName    string `json:"lname"`
	Email    string `json:"email"`
	Username string `json:"username"`
	Password string `json:"password"`
	DName    string `json:"dname"`
	PName    string `json:"pname"`
	SName    string `json:"sname"`
}

type UserUpdate struct {
	ENumber  string `json:"enumber"`
	FName    string `json:"fname"`
	LName    string `json:"lname"`
	Email    string `json:"email"`
	Username string `json:"username"`
	DName    string `json:"dname"`
	PName    string `json:"pname"`
	SName    string `json:"sname"`
}

type BookingHistory struct {
	Bookinglist_number string `json:"Bookinglist_number"`
	Booking_number     string `json:"Booking_number"`
	Room_number        string `json:"Room_number"`
	Room_name          string `json:"Room_name"`
	Details            string `json:"Details"` // Kept as string
	Start_date         string `json:"Start_date"`
	Start_time         string `json:"Start_time"`
	End_time           string `json:"End_time"`
	Status_number      string `json:"Status_number"`
	Status_name        string `json:"Status_name"`
	Employee_number    string `json:"Employee_number"`
}

type History struct {
	Status_name string `json:"Status_name"`
}
type HistoryChange struct {
	Bookinglist_number string `json:"Bookinglist_number"`
	Booking_number     string `json:"Booking_number"`
}

type UserDel struct {
	ENumber string `json:"enumber"`
}

type DepartmentDel struct {
	ID string `json:"dnumber"`
}

type PositionDel struct {
	ID string `json:"pnumber"`
}

type BuildingDel struct {
	ID string `json:"dnumber"`
}

type StatusDel struct {
	ID string `json:"snumber"`
}

type ResetUserScore struct {
	Usernumber string `json:"enumber"`
}
type ReportRequest struct {
	Booking_Number string `json:"bklnumber"`
	Booking_Open   string `json:"open"`
	Booking_Close  string `json:"close"`
}

type ReportSelect struct {
	Room       string `json:"room"`
	Day        string `json:"date"`
	Month      string `json:"month"`
	Year       string `json:"year"`
	Department string `json:"department"`
	Using_Room string `json:"using"`
	Cancel     string `json:"cancel"`
	Lock       string `json:"lock"`
}

type AddBooking struct {
	Room_name          string `json:"Room_name"`
	Details            string `json:"Details"` // Kept as string
	Start_date         string `json:"Start_date"`
	Start_time         string `json:"Start_time"`
	End_time           string `json:"End_time"`
	Status_name        string `json:"Status_name"`
}
type Booking_list struct {
	Bookinglist_number string `json:"Bookinglist_number"`
	Booking_number     string `json:"Booking_number"`
	Room_number        string `json:"Room_number"`
	Room_name          string `json:"Room_name"`
	Details            string `json:"Details"` // Kept as string
	Start_date         string `json:"Start_date"`
	Start_time         string `json:"Start_time"`
	End_time           string `json:"End_time"`
	Status_number      string `json:"Status_number"`
	Status_name        string `json:"Status_name"`
	Employee_number    string `json:"Employee_number"`
}
