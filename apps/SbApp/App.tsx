import * as React from 'react';
import { View } from 'react-native';
// import Constants from 'expo-constants';

import StorybookUIRoot from './.storybook/Storybook';

export default function App() {
	return (
		<View>
			<StorybookUIRoot />
		</View>
	);
}

// let AppEntryPoint = App;
//
// if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
// 	AppEntryPoint = require('./.storybook').default;
// }
