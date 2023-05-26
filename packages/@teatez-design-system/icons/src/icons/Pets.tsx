import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Pets = (props: SvgProps) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			fill={props.fill}
			accessibilityRole={'image'}
			viewBox={`0 0 ${props.width} ${props.height}`}
			{...props}
		>
			<Path
				d="M6 13c-1.1 0-2-1.12-2-2.5S4.9 8 6 8s2 1.12 2 2.5S7.1 13 6 13Zm3.5-4c1.1 0 2-1.12 2-2.5S10.6 4 9.5 4s-2 1.12-2 2.5.9 2.5 2 2.5Zm5 0c1.1 0 2-1.12 2-2.5s-.9-2.5-2-2.5-2 1.12-2 2.5.9 2.5 2 2.5ZM18 8c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5S19.1 8 18 8Zm-2.59 5.32C14.48 12.07 14 10 12 10s-2.48 2.08-3.41 3.32C7.78 14.4 5 15 5 17s1.64 2.5 2.45 2.5c.81 0 1.68-.52 4.55-.53 2.87 0 3.74.53 4.55.53.81 0 2.45-.5 2.45-2.5s-2.78-2.59-3.59-3.68Z"
				fill={props.color}
			/>
		</Svg>
	);
};

Pets.defaultProps = {
	width: '36',
	height: '36',
	fill: '#FFFFFF',
};

export default Pets;
