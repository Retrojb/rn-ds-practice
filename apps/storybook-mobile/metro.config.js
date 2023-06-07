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
	// '@teatez-design-system/typography': path.resolve(
	// 	workspaceRoot,
	// 	'packages/@teatez-design-system/typography'
	// ),
	// '@teatez-design-system/components': path.resolve(
	// 	workspaceRoot,
	// 	'packages/@teatez-design-system/components'
	// ),
};

defaultConfig.resolver.resolverMainFields = [
	'sbmodern',
	...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.watchFolders = [
	projectRoot,
	'./.ondevice',
	'./.storybook',
	...Object.values(monoPkg),
];

defaultConfig.resolver.extraNodeModules = monoPkg;
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

module.exports = defaultConfig;
