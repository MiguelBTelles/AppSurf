import {COLORS} from "@/constants/constants";
import React, {useContext} from "react";
import {Text, StyleSheet, View, Image} from 'react-native';
import {IconWithCardRound} from "@/components/atoms/icon-with-card-round/icon-with-card-round";

interface UserHeaderProps {
	onPress: any,
	
}

export function UserHeader({onPress}: UserHeaderProps) {
	
	return (
		<View style={styles.container}>
			<View style={styles.userContainer}>
				<Image
					source={require('@/assets/images/logo.png')}
					style={styles.avatarImage}
				/>
				<View style={styles.nameAndEnterprise}>
					<Text style={styles.name}>
						Seu nome
					</Text>
					<Text style={styles.enterprise}>
						Nome da Empresa
					</Text>
				</View>
			</View>
			<IconWithCardRound icon={'bells'} onPress={onPress}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	userContainer: {
		flexDirection: 'row',
		gap: 12,
	},
	avatarImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderColor: '#c6c6c6',
		borderWidth: 1,
	},
	nameAndEnterprise: {
		gap: 2,
	},
	name: {
		fontSize: 16,
	},
	enterprise: {
		fontSize: 14,
		color: COLORS.grayText,
	},
});
