import { getStorybookUI } from '@storybook/react-native';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
	shouldPersistSelection: true,
	onDeviceUI: true,
	enableWebsockets: true,
});

export default StorybookUIRoot;
