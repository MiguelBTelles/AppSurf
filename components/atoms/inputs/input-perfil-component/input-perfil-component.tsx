import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../constants/constants';
import {FontAwesome} from "@expo/vector-icons";
import {TextInput, TextInputProps} from 'react-native-paper'

interface InputComponentProps extends TextInputProps {
	isPassword?: boolean
}

export function InputPerfilComponent({isPassword, ...rest}: InputComponentProps) {
	const [showPassword, setShowPassword] = React.useState(true)
	return (
		<TextInput
			{...rest}
			style={{...styles.input}}
			secureTextEntry={isPassword && showPassword}
			right={isPassword ? (
				<TouchableOpacity style={{backgroundColor: 'red', width: 40, height: 10}} onPress={() => setShowPassword(!showPassword)}>
					<FontAwesome
						name={showPassword ? 'eye' : 'eye-slash'} size={20}
						color={'black'}/>
				</TouchableOpacity>
			) : null}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		color: COLORS.grayBorderLight,
		backgroundColor: 'transparent'
	},
})