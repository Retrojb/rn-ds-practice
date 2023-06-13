import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

import StorybookUIRoot from './.storybook';

const placeholderImg = require('./assets/splash.png');
export function App() {
	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<Image source={placeholderImg} style={styles.image} />
				<Text style={styles.text}>
					Open up App.js to start working on your app!
				</Text>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
	AppEntryPoint = require('./.storybook').default;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
	imgContainer: {
		flex: 1,
		paddingTop: 50,
	},
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});

export { default } from './.storybook';
