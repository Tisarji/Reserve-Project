import { getRooms } from "@/lib/room/getRooms";
import RoomManagementClient from "./RoomManagementClient";

export default async function RoomManagementPage() {
	const rooms = await getRooms();
	return <RoomManagementClient rooms={rooms} />;
}
