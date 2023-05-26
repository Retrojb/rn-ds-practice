import { View } from 'react-native';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(StoryFn) => (
		<View style={{ flex: 1, padding: 8 }}>
			<StoryFn />
		</View>
	),
];
