import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { cn } from '@/lib/utils';

interface CalendarProps {
	selected?: Date | Date[];
	onSelect?: (date: Date | undefined) => void;
	disabled?: (date: Date) => boolean;
	mode?: 'single' | 'range' | 'multiple';
	className?: string;
	showOutsideDays?: boolean;
	footer?: React.ReactNode;
}

export function Calendar({
	selected,
	onSelect,
	disabled,
	mode = 'single',
	className,
	showOutsideDays = true,
	footer,
	...props
}: CalendarProps) {
	return (
		<div className="calendar-wrapper">
			<DayPicker
				mode={mode}
				selected={selected}
				onSelect={onSelect}
				disabled={disabled}
				showOutsideDays={showOutsideDays}
				className={cn(
					"rounded-lg border border-gray-200 bg-white p-3 shadow-md",
					className
				)}
				classNames={{
					months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
					month: "space-y-4",
					caption: "flex justify-center pt-1 relative items-center",
					caption_label: "text-sm font-medium text-gray-900",
					nav: "space-x-1 flex items-center",
					nav_button: cn(
						"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
						"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-7 w-7 p-0 opacity-50 hover:opacity-100"
					),
					nav_button_previous: "absolute left-1",
					nav_button_next: "absolute right-1",
					table: "w-full border-collapse space-y-1",
					head_row: "flex",
					head_cell: "text-gray-500 rounded-md w-8 font-normal text-xs",
					row: "flex w-full mt-2",
					cell: cn(
						"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100",
						"first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
					),
					day: cn(
						"h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 hover:rounded-md",
						"transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					),
					day_selected: cn(
						"bg-blue-600 text-white hover:bg-blue-700 hover:text-white rounded-md font-medium"
					),
					day_today: "bg-gray-100 rounded-md font-medium",
					day_outside: "text-gray-400 opacity-50",
					day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
					day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
					day_hidden: "invisible",
				}}
				{...props}
			/>
			{footer && <div className="mt-3 border-t pt-3 text-center text-sm text-gray-500">{footer}</div>}
		</div>
	);
}
