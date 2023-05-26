import React, { useState } from 'react';
import { ButtonProps } from '../../props';
import { Pressable, StyleSheet, View, Text } from 'react-native';

export const Button = ({}: ButtonProps) => {
	const [eventLog, updateEventLog] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);
	const [delay, setDelay] = useState(0);

	return (
		<View>
			<Pressable
				role="button"
				accessibilityHint="button"
				disabled={isDisabled ? !isDisabled : true}
			>
				<Text>Press Me</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		maxWidth: 500,
		padding: '1rem',
		width: '100%',
	},
});
