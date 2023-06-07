import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StorybookUIRoot from './.storybook';

function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	AppEntryPoint = require('./.ondevice').default;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export { StorybookUIRoot as default };
