interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronLeftIcon = (props: ChevronIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M15 18l-6-6 6-6" />
	</svg>
);

interface ChevronRightIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronRightIcon = (props: ChevronRightIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M9 18l6-6-6-6" />
	</svg>
);
