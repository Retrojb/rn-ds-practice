import { View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: 'dark',
		values: [
			{ name: 'dark', value: '#00aced' },
			{ name: 'dark', value: '#ffffff' },
		],
	},
};

export const decorators = [
	(StoryFn) => (
		<View
			style={{
				flex: 1,
				padding: 10,
			}}
		>
			<StoryFn />
		</View>
	),
	withBackgrounds,
];
