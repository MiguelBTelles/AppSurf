import {StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface IconWithCardRoundProps {
	icon: string;
	onPress?: () => void;
}

export const IconWithCardRound = (props: IconWithCardRoundProps) => {
	  const { onPress, icon } = props;
  return (
	  <Container onPress={onPress}>
		  <AntDesign name={icon as any} size={16} color="black"/>
	  </Container>
  );
}

export const Container = ({onPress, children}: {onPress?: any, children?: any}) => {
	if(onPress){
		return (
			<TouchableOpacity style={styles.notificationBtn} onPress={onPress}>
				{children}
			</TouchableOpacity>
		)
	}
	return (
		<View style={styles.notificationBtn}>
			{children}
		</View>
	)

}

const styles = StyleSheet.create({
	notificationBtn: {
		padding: 8,
		backgroundColor: 'white',
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
