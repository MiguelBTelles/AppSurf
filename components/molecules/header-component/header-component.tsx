import React from "react";
import {View, Text} from "react-native";
import {BackButtonComponent} from "@/components/atoms/back-button-component/back-button-component";
import {Title} from "react-native-paper";
import {PageTitleComponent} from "@/components/atoms/page-title-component/page-title-component";

interface HeaderComponentProps {
	onBack?: () => void
	title?: string
}

export const HeaderComponent = ({onBack, title}: HeaderComponentProps) => {
	return (
		<View style={{paddingVertical: 24, flexDirection: 'row', alignItems: 'center', gap: 32}}>
			{onBack ? (
				<BackButtonComponent onPress={onBack}/>
			) : null}
			{title ? (
				<PageTitleComponent title={title}/>
			) : null}
		</View>
	)
}