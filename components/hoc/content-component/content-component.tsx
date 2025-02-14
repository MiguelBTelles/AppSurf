import React from "react";
import {View} from "react-native";

export const ContentComponent = ({children}: {children: any}) => {
	return (
		<View style={{paddingHorizontal: 24}}>
			{children}
		</View>
	)
}