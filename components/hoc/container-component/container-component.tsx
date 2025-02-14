import React from "react";
import {StyleSheet, View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {StatusBar} from "expo-status-bar";

interface ContainerComponentProps {
	children: any
}

export const ContainerComponent = ({children}: ContainerComponentProps) => {
	const dismissKeyboard = () => {
		Keyboard.dismiss();
	};
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // "padding" para iOS e "height" para Android
		>
			<TouchableWithoutFeedback onPress={dismissKeyboard}>
				<>
					{Platform.OS === 'ios' ? (
						<View style={{height: 53, backgroundColor: '#faf9f9'}}>
							<StatusBar style="dark" backgroundColor="#000"/>
						</View>
					) : null}
					{children}
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#faf9f9'
	},
})
