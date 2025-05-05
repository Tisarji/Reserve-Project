'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Users, ArrowRight } from 'lucide-react';
import meetImg from '../../app/image/booking/meet1.jpg';

interface Room {
	rnumber: string;
	rname: string;
	bname: string;
	flname: string;
	sname: string;
	capacity: number;
	vip: number;
}

interface Props {
	room: Room;
}

const RoomCard: React.FC<Props> = ({ room }) => {
	const router = useRouter();

	const handleBookingRedirect = () => {
		const encoded = encodeURIComponent(JSON.stringify(room));
		router.push(`/booking?room=${encoded}`);
	};

	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
			<div className="relative w-full h-48">
				<Image
					src={meetImg}
					alt={room.rname}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute top-3 right-3">
					{room.vip === 1 ? (
						<Badge className="bg-amber-500 hover:bg-amber-600">VIP</Badge>
					) : (
						<Badge className="bg-blue-500 hover:bg-blue-600">Standard</Badge>
					)}
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-xl font-bold mb-2">{`${room.bname} ${room.rname}`}</h3>

				<div className="space-y-2 mb-4">
					<div className="flex items-center text-gray-600">
						<Users size={18} className="mr-2" />
						<span>Capacity: {room.capacity} people</span>
					</div>
					<div className="flex items-center text-gray-600">
						<CalendarDays size={18} className="mr-2" />
						<span>{room.flname}</span>
					</div>
				</div>

				<Button
					onClick={handleBookingRedirect}
					className="w-full flex items-center justify-center gap-2 mt-2"
				>
					Book Room <ArrowRight size={16} />
				</Button>
			</div>
		</div>
	);
};

export default RoomCard;
