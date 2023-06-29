import { Appearance, SafeAreaView } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: Appearance.getColorScheme() === 'dark' ? 'dark' : 'light',
		values: [
			{ name: 'light', value: '#f1f1f1' },
			{ name: 'dark', value: '#444444' },
		],
	},
};

export const decorators = [
	(Story) => (
		<SafeAreaView>
			<Story />
		</SafeAreaView>
	),
	withBackgrounds,
];
