import { ButtonComponent } from "@/components/atoms/button-component/button-component";
import { InputComponent } from "@/components/atoms/inputs/input-component/input-component";
import { LogoComponent } from "@/components/atoms/logo-component/logo-component";
import { ContainerComponent } from "@/components/hoc/container-component/container-component";
import { ContentComponent } from "@/components/hoc/content-component/content-component";
import { ScrollComponent } from "@/components/hoc/scroll-component/scroll-component";
import { HeaderComponent } from "@/components/molecules/header-component/header-component";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text } from 'react-native';

export default function AddInstructor() {
    const router = useRouter();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        nome_completo: '',
        telefone: '',
        data_de_nascimento: '',
        cpf: '',
    });

    return (
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <HeaderComponent onBack={() => { router.navigate('/(app)/(tabs)/profile/my-instructors') }} />
                    <View style={{ alignItems: 'center' }}>
                        <LogoComponent width={120} height={120} />
                    </View>
                    <View style={{gap: 24, marginTop: 20}}>
                        <InputComponent
                            value={credentials.nome_completo}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    nome_completo: value
                                })
                            }}
                            label={'NOME COMPLETO'}
                        />
                        <InputComponent
                            value={credentials.email}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    email: value
                                })
                            }}
                            label={'EMAIL'}
                        />
                        <InputComponent
                            value={credentials.telefone}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    telefone: value
                                })
                            }}
                            label={'TELEFONE'}
                        />
                        <InputComponent
                            value={credentials.data_de_nascimento}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    data_de_nascimento: value
                                })
                            }}
                            label={'DATA DE NASCIMENTO'}
                        />
                        <InputComponent
                            value={credentials.cpf}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    cpf: value
                                })
                            }}
                            label={'CPF'}
                        />
                        <InputComponent
                            value={credentials.password}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    password: value
                                })
                            }}
                            label={'SENHA'}
                        />
                    </View>
                    <View style={{marginTop: 40}}>
                        <ButtonComponent text="ADICIONAR" onPress={()=> {router.navigate("/(app)/(tabs)/profile/my-instructors")}}/>
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )
}