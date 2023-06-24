import React from 'react';
import { View } from 'react-native';
import { Button } from '@teatez-design-system/core';
import { StoryObj } from '@storybook/react-native';

type Story = StoryObj<typeof Button>;
interface Created {
	Story: React.FunctionComponent;
}

const TestButton = {
	title: 'MyButton',
	component: Button,
	argTypes: {
		onPress: { action: 'pressed the button' },
	},
	args: {
		text: 'Hello world',
	},
	decorators: [
		({ Story }: Created) => (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
				<Story />
			</View>
		),
	],
};

export default TestButton;

export const Basic: Story = {};

export const AnotherExample = {
	args: {
		text: 'Another example',
	},
};
