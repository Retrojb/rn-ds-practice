module.exports = function (api) {
	api.cache(true);

	const rootImportOpts = {
		root: __dirname,
		rootPathPrefix: '~/',
		rootPathSuffix: 'root/',
	};

	const presetEnv = {
		useBuiltIns: 'entry',
		corejs: '3.22',
		loose: true,
	};

	const reactDocGenTS = {
		exclude: 'node_modules',
		includes: 'src.*\\.tsx',
		docgenCollectionName: 'STORYBOOK_REACT_CLASSES',
	};

	const modRes = {
		root: ['../../'],
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.jsx',
			'.jpg',
			'.png',
			'.tff',
			'.json',
			'.ios.js',
			'.android.js',
			'.expo.js',
		],
		alias: {
			'@components': 'packages/@teatez-design-system/components',
			'@icons': 'packages/@teatez-design-system/icons',
			'@core': 'packages/@teatez-design-system/core',
			'@tokens': 'packages/@teatez-design-system/tokens',
			'@typography': 'packages/@teatez-design-system/typography',
			'@utils': 'packages/utils',
		},
	};
	const presets = [
		['@babel/preset-env', presetEnv],
		'module:metro-react-native-babel-preset',
		'@babel/preset-react',
		'@babel/preset-typescript',
	];

	const plugins = [
		['babel-plugin-react-docgen-typescript', reactDocGenTS],
		['module-resolver', modRes],
		['babel-plugin-root-import', rootImportOpts],
		['@babel/plugin-transform-private-property-in-object', { loose: true }],
		['@babel/plugin-transform-private-methods', { loose: true }],
		['@babel/plugin-transform-class-properties', { loose: true }],
	];
	return {
		presets,
		plugins,
	};
};
