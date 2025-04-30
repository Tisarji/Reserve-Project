export async function getRooms() {
	const res = await fetch(`${process.env.BACKEND_URL}/api/rooms`, {
		cache: "no-store",
	});
	if (!res.ok) throw new Error("Failed to fetch rooms");

	const data = await res.json();

	return data.map((room: any) => ({
		rnumber: room.RNumber.toString(),
		rname: room.RName,
		bname: room.BuildingID || "N/A",
		flname: room.floor?.FName || "N/A",
		sname: room.status?.SName || "N/A",
		vip: room.VIP ? "1" : "0",
		capacity: room.Capacity
	}));
}
