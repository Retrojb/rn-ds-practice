module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
			'module:metro-react-native-babel-preset',
			'@babel/preset-react',
			'@babel/preset-typescript',
			[
				'@babel/preset-env',
				{
					targets: { node: 'current' },
					shippedProposals: true,
					loose: false,
					debug: true,
				},
			],
		],
		plugins: [
			['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
		],
	};
};
