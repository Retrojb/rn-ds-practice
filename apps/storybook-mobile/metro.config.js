const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const workspaceRoot = __dirname;
const projectRoot = path.resolve(workspaceRoot, '../../');
const defaultConfig = getDefaultConfig(workspaceRoot);

const monoPkg = {
	'@teatez/design-system': path.resolve(
		projectRoot,
		'packages/@teatez/design-system'
	),
	'@teatez-design-system/core': path.resolve(
		projectRoot,
		'packages/@teatez-design-system/core'
	),
	'@teatez-design-system/icons': path.resolve(
		projectRoot,
		'packages/@teatez-design-system/icons'
	),
	'@teatez-design-system/tokens': path.resolve(
		projectRoot,
		'packages/@teatez-design-system/tokens'
	),
};

defaultConfig.resolver.resolverMainFields = [
	'sbmodern',
	...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.resolver.assetExts = ['.ttf'];
defaultConfig.watchFolders = [
	workspaceRoot,
	projectRoot,
	'./.storybook',
	...Object.values(monoPkg),
];

defaultConfig.resolver.extraNodeModules = {
	projectRoot: path.resolve(path.join(__dirname, '../../node_modules')),
};
// Order matters for the order the repo shakes.
defaultConfig.resolver.nodeModulePaths = [
	path.resolve(workspaceRoot, 'node_modules'),
	path.resolve(projectRoot, 'node_modules'),
];

defaultConfig.transformer.getTransformOptions = async () => ({
	transform: {
		experimentalImportSupport: false,
		inlineRequires: false,
	},
});

defaultConfig.resolver.disableHierarchicalLookup = true;
console.log(defaultConfig.resolver.getTransformOptions);
console.log(defaultConfig);
module.exports = defaultConfig;
