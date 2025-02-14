import {StyleSheet, View,} from 'react-native';

import {useRouter} from 'expo-router';
import {PageTitleComponent} from '@/components/atoms/page-title-component/page-title-component';
import {ProfileOptionComponent} from '../../../../components/molecules/profile-option-component/profile-option-component';
import React, {useContext} from "react";
import {ContainerComponent} from "@/components/hoc/container-component/container-component";
import {ScrollComponent} from "@/components/hoc/scroll-component/scroll-component";
import {HeaderComponent} from "@/components/molecules/header-component/header-component";
import {ContentComponent} from "@/components/hoc/content-component/content-component";

export default function Profile() {
	const router = useRouter()
	return (
		<ContainerComponent>
			<ScrollComponent>
				<ContentComponent>
					<HeaderComponent title={'Meu Perfil'}/>
					<View style={styles.profileOptions}>
						<ProfileOptionComponent optionName={'Meus Dados'} onPress={() => {
							router.navigate('/(app)/(tabs)/profile/personal-info')
						}}/>
						<ProfileOptionComponent optionName={'Minha Empresa'} onPress={() => {
							router.navigate('/(app)/(tabs)/profile/my-company')
						}}/>
						<ProfileOptionComponent optionName={'Meus Instrutores'} onPress={() => {
							router.navigate('/(app)/(tabs)/profile/my-instructors')
						}}/>
						<ProfileOptionComponent optionName={'Meus Alunos'} onPress={() => {
							router.navigate('/(app)/(tabs)/profile/my-students')
						}}/>
						<ProfileOptionComponent optionName={'Meus Templates'} onPress={() => {
							router.navigate('/(app)/(tabs)/profile/my-templates')
						}}/>
						<ProfileOptionComponent optionName={'Sair'} onPress={() => {router.navigate('/')}}/>
					</View>
				</ContentComponent>
			</ScrollComponent>
		</ContainerComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'white'
	},
	PageTitleContainer: {
		marginTop: 44,
		marginBottom: 88,
		backgroundColor: 'transparent'
	},
	profileOptions: {
		gap: 40,
		marginTop: 60,
		backgroundColor: 'transparent'
	}
});
