'use client';
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

// Helper component for visualizing radio circles
const RadioCircle = ({ checked }: { checked: boolean }) => (
	<div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 shadow-sm">
		{checked && (
			<div className="h-2 w-2 rounded-full bg-blue-600" />
		)}
	</div>
);

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
	className?: string;
}

export const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn("flex flex-col gap-2", className)}
			{...props}
		/>
	);
};

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	label: string;
	description?: string;
	disabled?: boolean;
}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
	({ label, description, disabled = false, className, ...props }, ref) => (
		<div className={cn(
			"flex items-start space-x-2 rounded-md border border-transparent p-2",
			"transition-colors hover:bg-gray-50",
			disabled && "opacity-50 cursor-not-allowed hover:bg-transparent",
			className
		)}>
			<RadioGroupPrimitive.Item
				ref={ref}
				disabled={disabled}
				className={cn(
					"aspect-square h-4 w-4 rounded-full border border-gray-300",
					"focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"data-[state=checked]:border-blue-600 data-[state=checked]:bg-white"
				)}
				{...props}
			>
				<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
					<div className="h-2 w-2 rounded-full bg-blue-600" />
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
			<div className="space-y-1">
				<label
					htmlFor={props.id}
					className={cn(
						"block text-sm font-medium",
						disabled ? "text-gray-400" : "text-gray-700"
					)}
				>
					{label}
				</label>
				{description && (
					<p className="text-xs text-gray-500">{description}</p>
				)}
			</div>
		</div>
	)
);
RadioGroupItem.displayName = 'RadioGroupItem';
