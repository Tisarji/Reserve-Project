import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: "default" | "success" | "warning" | "error" | "info";
	size?: "sm" | "md" | "lg";
}

export const Badge = ({
	className,
	variant = "default",
	size = "md",
	...props
}: BadgeProps) => {
	const variantClasses = {
		default: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
		success: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
		warning:
			"bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
		error: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
		info: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
	};

	const sizeClasses = {
		sm: "text-xs px-1.5 py-0.5",
		md: "text-xs px-2 py-1",
		lg: "text-sm px-2.5 py-1.5",
	};

	return (
		<span
			className={cn(
				"inline-flex items-center justify-center rounded-full font-medium border transition-colors",
				variantClasses[variant],
				sizeClasses[size],
				className
			)}
			{...props}
		/>
	);
};
