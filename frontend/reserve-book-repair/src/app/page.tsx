import RoomManagement from "@/component/management/room";
import UserManagement from "@/component/management/user";

import Login from "../component/login/login";
import Navbar from "../component/navbar/navbar";
import NotificationPanel from "@/component/notification/notification";
import { User } from "lucide-react";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="p-6">
				{/* <RoomManagement /> */}
				{/* <UserManagement /> */}
			</main>
		</>
	);
}
