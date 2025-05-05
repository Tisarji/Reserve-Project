"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
			className
		)}
		{...props}
	/>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
			className
		)}
		{...props}
	/>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// Enhanced Tabs with animation and additional features
const EnhancedTabs = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
		variant?: "default" | "pills" | "underlined" | "bordered";
		size?: "sm" | "md" | "lg";
		fullWidth?: boolean;
		animated?: boolean;
	}
>(({ className, variant = "default", size = "md", fullWidth = false, animated = true, ...props }, ref) => {
	const variantClasses = {
		default: "",
		pills: "bg-gray-100 p-1 rounded-lg",
		underlined: "border-b border-gray-200",
		bordered: "border border-gray-200 rounded-lg p-1",
	};

	const sizeClasses = {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base",
	};

	return (
		<Tabs
			ref={ref}
			className={cn(
				variantClasses[variant],
				sizeClasses[size],
				fullWidth && "w-full",
				className
			)}
			{...props}
		/>
	);
});
EnhancedTabs.displayName = "EnhancedTabs";

const EnhancedTabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
		variant?: keyof typeof variantClasses;
		align?: "start" | "center" | "end" | "between" | "around";
	}
>(({ className, variant = "default" as keyof typeof variantClasses, align = "start", ...props }, ref) => {
	const variantClasses = {
		default: "bg-transparent",
		pills: "bg-transparent",
		underlined: "border-b-0",
		bordered: "bg-transparent",
	};

	const alignClasses = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
		between: "justify-between",
		around: "justify-around",
	};

	return (
		<TabsList
			ref={ref}
			className={cn(
				"inline-flex items-center",
				variantClasses[variant],
				alignClasses[align],
				className
			)}
			{...props}
		/>
	);
});
EnhancedTabsList.displayName = "EnhancedTabsList";

const EnhancedTabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
		variant?: "default" | "pills" | "underlined" | "bordered";
		size?: "sm" | "md" | "lg";
		withIcon?: boolean;
	}
>(({ className, variant = "default", size = "md", withIcon = false, ...props }, ref) => {
	const variantClasses = {
		default: "data-[state=active]:bg-white data-[state=active]:shadow-sm",
		pills: "data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md",
		underlined: "border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary rounded-none",
		bordered: "data-[state=active]:bg-white data-[state=active]:border-primary data-[state=active]:text-primary",
	};

	const sizeClasses = {
		sm: "px-2 py-1 text-xs",
		md: "px-3 py-1.5 text-sm",
		lg: "px-4 py-2 text-base",
	};

	return (
		<TabsTrigger
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				variantClasses[variant],
				sizeClasses[size],
				withIcon && "gap-2",
				className
			)}
			{...props}
		/>
	);
});
EnhancedTabsTrigger.displayName = "EnhancedTabsTrigger";

const EnhancedTabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
		animated?: boolean;
	}
>(({ className, animated = true, ...props }, ref) => {
	if (animated) {
		return (
			<TabsContent
				ref={ref}
				className={cn("mt-2 focus-visible:outline-none", className)}
				asChild
				{...props}
			>
				<motion.div
					initial={{ opacity: 0, y: 5 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 5 }}
					transition={{ duration: 0.2 }}
				>
					{props.children}
				</motion.div>
			</TabsContent>
		);
	}

	return (
		<TabsContent
			ref={ref}
			className={cn("mt-2 focus-visible:outline-none", className)}
			{...props}
		/>
	);
});
EnhancedTabsContent.displayName = "EnhancedTabsContent";

export {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	EnhancedTabs,
	EnhancedTabsList,
	EnhancedTabsTrigger,
	EnhancedTabsContent,
};
