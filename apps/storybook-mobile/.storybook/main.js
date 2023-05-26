module.exports = {
	stories: [
		'../src/**/_docs_/*.stories.mdx',
		'../src/**/_stories_/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-react-native-web',
			options: {
				modulesToTranspile: [
					'react-native-reanimated',
					'react-native-vector-icons',
				],
				babelPlugins: ['react-native-reanimated/plugin'],
			},
		},
	],
	core: {
		builder: 'webpack5',
		enableCrashReports: true,
		disableTelemetry: true,
	},
	framework: '@storybook/react',
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
};
