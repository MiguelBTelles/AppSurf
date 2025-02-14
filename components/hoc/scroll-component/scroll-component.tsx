import React from "react";
import {ScrollView, View} from "react-native";

interface ContentComponentProps {
	children: any
}

export const ScrollComponent = ({children}: ContentComponentProps) => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:  12}}>
			{children}
			<View style={{height: 80}}/>
		</ScrollView>
	)
}
