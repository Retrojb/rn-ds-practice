module.exports = {
	stories: [
		'../src/**/_docs_/*.stories.mdx',
		'../src/**/_stories_/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-ondevice-controls',
		'@storybook/addon-ondevice-actions',
		'@storybook/addon-ondevice-backgrounds',
		'@storybook/addon-ondevice-notes',
	],
};
