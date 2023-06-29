module.exports = {
	stories: [
		'../.storybook/stories/**/*.stories.?(ts|tsx|js|jsx)',
		// '../../../packages/@teatez-design-system/core/components/**/__stories__/*.stories.?(ts|tsx|js|jsx)',
	],
	addons: ['@storybook/addon-ondevice-backgrounds'],
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
