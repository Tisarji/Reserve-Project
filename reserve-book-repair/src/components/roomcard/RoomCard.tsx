'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	CalendarDays,
	Users,
	ArrowRight,
	MapPin,
	CheckCircle,
	Star,
	Clock
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import meetImg from '../../app/image/booking/meet1.jpg';

interface Room {
	rnumber: string;
	rname: string;
	bname: string;
	flname: string;
	sname: string;
	capacity: number;
	vip: number;
	amenities?: string[];
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

	const getStatusColor = (status: RoomStatus): string => {
		switch (status) {
			case 'Available':
				return 'bg-green-100 text-green-800 border-green-200';
			case 'Occupied':
				return 'bg-red-100 text-red-800 border-red-200';
			case 'Reserved':
				return 'bg-amber-100 text-amber-800 border-amber-200';
			case 'Maintenance':
				return 'bg-gray-100 text-gray-800 border-gray-200';
			default:
				return 'bg-blue-100 text-blue-800 border-blue-200';
		}
	};

	type RoomStatus = 'Available' | 'Occupied' | 'Reserved' | 'Maintenance' | string;

	return (
		<div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
			<div className="relative w-full h-52">
				<Image
					src={meetImg}
					alt={room.rname}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					priority
				/>
				<div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center">
					<Badge className={`${getStatusColor(room.sname)} px-3 py-1 text-xs font-medium flex items-center`}>
						<Clock size={14} className="mr-1" />
						{room.sname}
					</Badge>

					{room.vip === 1 && (
						<Badge className="bg-amber-500 hover:bg-amber-600 px-3 py-1 text-xs font-medium flex items-center">
							<Star size={14} className="mr-1" />
							VIP
						</Badge>
					)}
				</div>
			</div>

			<div className="p-5">
				<div className="flex justify-between items-start mb-3">
					<h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
						{room.rname}
					</h3>
					<Badge variant="default" className="border-gray-200 text-gray-600">
						#{room.rnumber}
					</Badge>
				</div>

				<div className="space-y-2 mb-4">
					<div className="flex items-center text-gray-600">
						<MapPin size={16} className="mr-2 text-gray-400" />
						<span>{`${room.bname}, ${room.flname}`}</span>
					</div>

					<div className="flex items-center text-gray-600">
						<Users size={16} className="mr-2 text-gray-400" />
						<span>Capacity: <strong>{room.capacity}</strong> people</span>
					</div>
				</div>

				{room.amenities && room.amenities.length > 0 && (
					<div className="mb-4">
						<div className="flex flex-wrap gap-1">
							{room.amenities.slice(0, 3).map((amenity, index) => (
								<TooltipProvider key={index}>
									<Tooltip>
										<TooltipTrigger asChild>
											<Badge variant="default" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
												{amenity}
											</Badge>
										</TooltipTrigger>
										<TooltipContent>
											<p>{amenity}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							))}
							{room.amenities.length > 3 && (
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Badge variant="default" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
												+{room.amenities.length - 3} more
											</Badge>
										</TooltipTrigger>
										<TooltipContent>
											<div className="space-y-1">
												{room.amenities.slice(3).map((amenity, index) => (
													<p key={index} className="flex items-center">
														<CheckCircle size={12} className="mr-1" /> {amenity}
													</p>
												))}
											</div>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							)}
						</div>
					</div>
				)}

				<Button
					onClick={handleBookingRedirect}
					className={`w-full flex items-center justify-center gap-2 ${room.sname !== 'Available' ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
						} text-white transition-colors mt-2`}
					disabled={room.sname !== 'Available'}
				>
					{room.sname === 'Available' ? (
						<>Book Room <ArrowRight size={16} /></>
					) : (
						'Unavailable'
					)}
				</Button>
			</div>
		</div>
	);
};

export default RoomCard;
