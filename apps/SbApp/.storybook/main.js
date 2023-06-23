module.exports = {
	stories: [
		'./stories/**/*.stories.?(ts|tsx|js|jsx)',
		// '../../../packages/@teatez-design-system/core/components/**/__stories__/*.stories.?(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-ondevice-controls',
		'@storybook/addon-ondevice-actions',
		'@storybook/addon-ondevice-backgrounds',
	],
};
