import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirp } from 'mkdirp';
import { Command } from 'commander';
const removeSyncOptions = { recursive: true, force: true };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.join(__dirname, '../../../');
const componentPath = path.join(
	rootPath,
	'packages/@teatez-design-system/components'
);

// const cli = new Command();
// cli
// 	.version('0.0.1')
// 	.description(
// 		'Create a React Native Component pass a name and a file type ext'
// 	)
// 	.option('-f --file <value>', 'File Name to be created')
// 	.parse(process.argv);
//
// const options = cli.opts();
const createDirectory = (path) => {
	try {
		fs.accessSync(path, fs.constants.X_OK);
	} catch {
		console.log('Created Dir');
		mkdirp.sync(path);
	}
};
const createComponent = (componentName, fileExt) => {
	const componentDir = path.resolve(componentPath, 'src/');
	const storyDir = path.resolve(componentDir, `${componentName}`);
	console.log(fileExt);
	console.log(process.argv);
	// if the dir doesn't exist create it
	if (!fs.existsSync(storyDir)) {
		console.log('not present');
		createDirectory(storyDir);
		fs.writeFileSync(
			`${storyDir}/${componentName}.${fileExt}`,
			`import React from 'react';
    import ${componentName}Props from './props/${componentName}Props';
    const ${componentName} = ({}: ${componentName}Props) => {
      return ();
    };
    export default ${componentName};
    `
		);
	} else {
		console.log('exists', componentDir);
	}
};

const createProps = (componentName, fileExt) => {
	const componentDir = path.resolve(componentPath, 'src/');
	const storyDir = path.resolve(componentDir, `${componentName}`);

	// if the dir doesn't exist create it
	if (!fs.existsSync(storyDir)) {
		console.log('not present');
		console.log(componentName);
		createDirectory(storyDir);
	} else {
		console.log('exists', componentDir);
	}
	fs.writeFileSync(
		`${storyDir}.${fileExt}`,
		`
    export type ${componentName}Props = {
    };
    `
	);
};

const createStory = (componentName, fileExt) => {
	const componentDir = path.resolve(componentPath, 'src/');
	const storyDir = path.resolve(componentDir, `${componentName}`);

	// if the dir doesn't exist create it
	if (!fs.existsSync(storyDir)) {
		console.log('not present');
		console.log(componentName);
		createDirectory(storyDir);
	} else {
		console.log('exists', componentDir);
	}
	fs.writeFileSync(
		`${storyDir}/__stories__/${componentName}.stories.${fileExt}`,
		`
    export type ${componentName}Props = {
    };
    `
	);
};
// if (options.file) {
// 	createDirectory(process.argv[2], process.argv[3]);
// }
const main = () => {
	createComponent(process.argv[2], process.argv[3]);
};

main();
