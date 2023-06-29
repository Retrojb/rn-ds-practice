import { Meta } from '@storybook/react-native';
import React from 'react';
import { MyButton } from './Button';

const MyButtonMeta = {
	title: 'MyButton',
	component: MyButton,
} as Meta<typeof MyButton>;

export default MyButtonMeta;

export const Basic = {};

export const AnotherExample = {
	args: {
		text: 'Another example',
	},
};
