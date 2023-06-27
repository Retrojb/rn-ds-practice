import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Button } from '../Button';

export default {
	title: 'Button',
	component: Button,
	args: {
		text: 'foo',
	},
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;
