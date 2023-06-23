import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { Text, StyleSheet } from 'react-native';

const Background = () => (
	<Text style={styles.text}>
		Change background color via Addons -&gt; Background
	</Text>
);

const styles = StyleSheet.create({
	text: { color: 'black' },
});

const BackgroundMeta: ComponentMeta<typeof Background> = {
	title: 'Background CSF',
	component: Background,
	decorators: [withBackgrounds],
	parameters: {
		backgrounds: {
			default: 'plain',
			values: [
				{ name: 'plain', value: 'white' },
				{ name: 'warm', value: 'hotpink' },
				{ name: 'cool', value: 'deepskyblue' },
			],
		},
	},
};

export default BackgroundMeta;

type BackgroundStory = ComponentStory<typeof Background>;

export const Basic: BackgroundStory = () => <Background />;