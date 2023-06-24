const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../../');
const defaultConfig = getDefaultConfig(projectRoot);

const monoPkg = {
	'@teatez/design-system': path.resolve(
		workspaceRoot,
		'packages/@teatez/design-system'
	),
	'@teatez-design-system/core': path.resolve(
		workspaceRoot,
		'packages/@teatez-design-system/core'
	),
	'@teatez-design-system/icons': path.resolve(
		workspaceRoot,
		'packages/@teatez-design-system/icons'
	),
	'@teatez-design-system/tokens': path.resolve(
		workspaceRoot,
		'packages/@teatez-design-system/tokens'
	),
};

defaultConfig.resolver.resolverMainFields = [
	'sbmodern',
	'react-native',
	...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.resolver.assetExts = ['.ttf'];
defaultConfig.watchFolders = [
	projectRoot,
	workspaceRoot,
	path.resolve(projectRoot, './.storybook'),
	...Object.values(monoPkg),
];

defaultConfig.resolver.extraNodeModules = {
	projectRoot: path.resolve(path.join(__dirname, '../../node_modules')),
};
// Order matters for the order the repo shakes.
defaultConfig.resolver.nodeModulePaths = [
	path.resolve(projectRoot, 'node_modules'),
	path.resolve(workspaceRoot, 'node_modules'),
];

defaultConfig.transformer.getTransformOptions = async () => ({
	transform: {
		experimentalImportSupport: false,
		inlineRequires: false,
	},
});

defaultConfig.resolver.disableHierarchicalLookup = true;
console.log(defaultConfig);
module.exports = defaultConfig;
