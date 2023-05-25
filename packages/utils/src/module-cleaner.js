import fs from 'node:fs';
import path from 'path';
import rootPackageJsonWorkspaces from '../../../package.json' assert { type: 'json' };
import { fileURLToPath } from 'url';

const removeSyncOptions = { recursive: true, force: true };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.join(__dirname, '../../../');

const cleanPackages = (dir) => {
	[
		'lib',
		'.dist',
		'.turbo',
		'.yarn-*.log',
		'storybook-static',
		'storybook.require.js',
		'node_modules',
	].forEach((childToRemove) => {
		const childToRemoveFromPath = path.join(dir, childToRemove);
		if (fs.existsSync(childToRemoveFromPath)) {
			console.warn(`Removing ${childToRemoveFromPath}`);
			fs.rmSync(childToRemoveFromPath, removeSyncOptions);
		}
	});
};

const cleanWorkspaces = () => {
	for (const pkgWorkspace of rootPackageJsonWorkspaces.workspaces) {
		const isGlob = pkgWorkspace.includes('/*');
		// Allow user to set the depth of their mono-repo
		const barPath = path.join(
			rootPath,
			pkgWorkspace.slice(0, isGlob ? -2 : pkgWorkspace.length)
		);

		if (fs.existsSync(barPath)) {
			if (isGlob) {
				fs.readdirSync(barPath, { withFileTypes: true })
					.filter((dirent) => dirent.isDirectory())
					.map((dir) => path.join(barPath, dir.name))
					.forEach(cleanPackages);
			} else {
				cleanPackages(barPath);
			}
		} else {
			// Use chalk to make these clearer errors
			console.error(`Unable to handle ${barPath}`);
			if (barPath.includes('*')) console.error(`Simply path in`);
		}
	}
};
// // Clean root layer

const cleanRootDir = () => {
	[path.join(rootPath, 'node_modules')].forEach((rootSubPath) => {
		if (fs.existsSync(rootSubPath)) {
			console.warn(`Removing ${rootSubPath}`);
			fs.rmSync(rootSubPath, removeSyncOptions);
		}
	});
};

const clearAll = () => {
	cleanWorkspaces();
	cleanRootDir();
};

clearAll();
