export type ButtonProps = {
	text?: string;
	width?: 'auto' | number;
	onClick?: () => void;
	onHover?: () => void;
	isDisabled?: boolean;
};
