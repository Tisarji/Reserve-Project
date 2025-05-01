export async function getRooms() {
	const res = await fetch(`${process.env.BACKEND_URL}/api/rooms`, {
		cache: "no-store",
	});
	if (!res.ok) throw new Error("Failed to fetch rooms");

	const data = await res.json();

	console.log("Fetched rooms:", data);
	return data.map((room: any) => ({
		rnumber: room.RNumber ? String(room.RNumber) : "N/A",
		rname: room.RName ?? "N/A",
		bname: room.BuildingID || "N/A",
		flname: room.floor?.FName || "N/A",
		sname: room.status?.SName || "N/A",
		vip: room.VIP ? "1" : "0",
		capacity: room.Capacity ?? 0
	}));
}
