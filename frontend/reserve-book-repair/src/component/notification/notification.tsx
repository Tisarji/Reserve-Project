"use client";

import React, { useState } from "react";
import { Bell, X, CheckCircle, XCircle, Ban } from "lucide-react";

type NotificationType = "accepted" | "rejected" | "suspended";

interface Notification {
	id: number;
	type: NotificationType;
	title: string;
	message: string;
	time: string;
}

const iconMap = {
	accepted: <CheckCircle className="text-green-600" />,
	rejected: <XCircle className="text-orange-500" />,
	suspended: <Ban className="text-red-600" />,
};

const NotificationPanel: React.FC = () => {
	const [show, setShow] = useState(false);
	const [notifications, setNotifications] = useState<Notification[]>([
		{
			id: 1,
			type: "accepted",
			title: "Your reservation has been accepted",
			message: "D502 ready to go in 30 minutes",
			time: "a few seconds ago",
		},
		{
			id: 2,
			type: "rejected",
			title: "Your reservation has been rejected",
			message: "CC222 has been rejected by DQ Staff",
			time: "10 minutes ago",
		},
		{
			id: 3,
			type: "suspended",
			title: "Your account has been suspended",
			message: "We’ve informed you. Please contact us",
			time: "a few seconds ago",
		},
	]);

	const removeNotification = (id: number) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	};

	return (
		<div className="relative">
			<button onClick={() => setShow(!show)} className="text-black">
				<Bell className="w-6 h-6 text-blue-500" />
			</button>

			{show && (
				<div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-lg z-50 overflow-hidden">
					<div className="px-4 py-3 border-b font-semibold text-sm text-black border-gray-200">
						NOTIFICATIONS ({notifications.length})
					</div>
					{notifications.map((n) => (
						<div
							key={n.id}
							className="flex items-start gap-3 px-4 py-3 border-b last:border-b-0"
						>
							<div className="pt-1">{iconMap[n.type]}</div>
							<div className="flex-1 text-sm text-black">
								<div>
									<span className="font-semibold text-black">{n.title.split(" ")[0]}</span>{" "}
									{n.title.replace(n.title.split(" ")[0], "")}
								</div>
								<div className="text-black text-sm">{n.message}</div>
								<div className="text-xs text-gray-400 mt-1">{n.time}</div>
							</div>
							<button
								onClick={() => removeNotification(n.id)}
								className="text-gray-400 hover:text-gray-600"
							>
								<X size={16} />
							</button>
						</div>
					))}

				</div>
			)}
		</div>
	);
};

export default NotificationPanel;
