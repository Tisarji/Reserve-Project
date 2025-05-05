import React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	optional?: boolean;
	error?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	({ className, optional, error, children, ...props }, ref) => (
		<label
			ref={ref}
			className={cn(
				"text-sm font-medium",
				error ? "text-red-700" : "text-gray-700",
				className
			)}
			{...props}
		>
			{children}
			{optional && <span className="ml-1 text-gray-400 text-xs">(optional)</span>}
		</label>
	)
);
Label.displayName = 'Label';
