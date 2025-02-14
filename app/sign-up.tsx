import React, {useContext, useState} from "react";
import {View, StyleSheet} from 'react-native'
import {LogoComponent} from "@/components/atoms/logo-component/logo-component";
import {InputComponent} from "@/components/atoms/inputs/input-component/input-component";
import {TextLinkComponent} from "@/components/atoms/text-link-component/text-link-component";
import {ButtonComponent} from "@/components/atoms/button-component/button-component";
import {useRouter} from "expo-router";
import {ContainerComponent} from "@/components/hoc/container-component/container-component";
import {ScrollComponent} from "@/components/hoc/scroll-component/scroll-component";
import {InputCpf} from "../components/atoms/inputs/input-cpf/input-cpf";
import {InputPhone} from "../components/atoms/inputs/input-phone/input-phone";
import {HeaderComponent} from "@/components/molecules/header-component/header-component";
import {ContentComponent} from "@/components/hoc/content-component/content-component";

export default function SignUp() {
	const [data, setData] = useState({
		company_name: '',
		name: '',
		email: '',
		phone: '',
		birthday: '',
		document: '',
		password: ''
	})
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	const handleInput = (key: string, value: string) => setData({...data, [key]: value})

	return (
		<ContainerComponent>
			<ScrollComponent>
				<ContentComponent>
					<HeaderComponent onBack={() => router.navigate('/')} title={'Cadastrar'}/>
					<View style={styles.logoContainer}>
						<LogoComponent width={200} height={180}/>
					</View>
					<View style={styles.inputsContainer}>
						<InputComponent
							value={data.company_name}
							onChangeText={(value: string) => handleInput('company_name', value)}
							label={'NOME DA EMPRESA'}
						/>
						<InputComponent
							value={data.name}
							onChangeText={(value: string) => handleInput('name', value)}
							label={'NOME COMPLETO'}
						/>
						<InputComponent
							value={data.email}
							onChangeText={(value: string) => handleInput('email', value)}
							label={'EMAIL'}
						/>
						<InputPhone
							value={data.phone}
							onChangeText={(value: string) => handleInput('phone', value)}
							label={'TELEFONE'}
						/>
						<InputComponent
							value={data.birthday}
							onChangeText={(value: string) => handleInput('birthday', value)}
							label={'DATA DE NASCIMENTO'}
						/>
						<InputCpf
							value={data.document}
							onChangeText={(value: string) => handleInput('document', value)}
							label={'CPF'}
						/>
						<InputComponent
							isPassword={true}
							value={data.password}
							onChangeText={(value: string) => handleInput('password', value)}
							label={'SENHA'}
						/>
					</View>
					<View style={styles.termsLink}>
						<TextLinkComponent
							link={'Termos de uso da plataforma'}
							onPress={undefined}
						/>
					</View>
					<View style={styles.btnContainer}>
						<ButtonComponent
							loading={loading}
							text={'SALVAR'}
							onPress={() => {router.navigate('/')}}
						/>
					</View>
				</ContentComponent>
			</ScrollComponent>
		</ContainerComponent>
	)
}

const styles = StyleSheet.create({
	inputsContainer: {
		gap: 20
	},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 32
	},
	termsLink: {
		marginTop: 25,
		gap: 8,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 26
	}
})
