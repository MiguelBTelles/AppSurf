import { ButtonComponent } from "@/components/atoms/button-component/button-component";
import { InputComponent } from "@/components/atoms/inputs/input-component/input-component";
import { InstructionTextComponent } from "@/components/atoms/instruction-text-component/instruction-text-component";
import { ContainerComponent } from "@/components/hoc/container-component/container-component";
import { ContentComponent } from "@/components/hoc/content-component/content-component";
import { ScrollComponent } from "@/components/hoc/scroll-component/scroll-component";
import { HeaderComponent } from "@/components/molecules/header-component/header-component";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text } from 'react-native'

export default function MyCompany() {
    const router = useRouter()
    const [currentPosition, setCurrentPosition] = useState(0)
    const [credentials1, setCredentials1] = useState({
        razao_social: '',
        nome_fantasia: '',
        apelido: '',
        data_de_criacao: '',
        cnpj: '',
        email: '',
        telefone: '',
        nome_do_contato: ''
    });
    const [credentials2, setCredentials2] = useState({
        endereco: '',
        numero: '',
        complemento: '',
        cep: '',
        estado: '',
        cidade: ''
    });
    const [credentials3, setCredentials3] = useState({
        descricao_das_atividades: ''
    });

    return (
        <>
            {currentPosition === 0 && (
                <ContainerComponent>
                    <ScrollComponent>
                        <ContentComponent>
                            <HeaderComponent onBack={router.back} />
                            <View style={{ gap: 24 }}>
                                <InputComponent
                                    value={credentials1.razao_social}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            razao_social: value
                                        })
                                    }}
                                    label={'RAZÃO SOCIAL'}
                                />
                                <InputComponent
                                    value={credentials1.nome_fantasia}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            nome_fantasia: value
                                        })
                                    }}
                                    label={'NOME FANTASIA'}
                                />
                                <InputComponent
                                    value={credentials1.apelido}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            apelido: value
                                        })
                                    }}
                                    label={'APELIDO'}
                                />
                                <InputComponent
                                    value={credentials1.data_de_criacao}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            data_de_criacao: value
                                        })
                                    }}
                                    label={'DATA DE CRIAÇÃO'}
                                />
                                <InputComponent
                                    value={credentials1.cnpj}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            cnpj: value
                                        })
                                    }}
                                    label={'CNPJ'}
                                />
                                <InputComponent
                                    value={credentials1.email}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            email: value
                                        })
                                    }}
                                    label={'EMAIL'}
                                />
                                <InputComponent
                                    value={credentials1.telefone}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            telefone: value
                                        })
                                    }}
                                    label={'TELEFONE'}
                                />
                                <InputComponent
                                    value={credentials1.nome_do_contato}
                                    onChangeText={(value: string) => {
                                        setCredentials1({
                                            ...credentials1,
                                            nome_do_contato: value
                                        })
                                    }}
                                    label={'NOME DO CONTATO'}
                                />
                            </View>
                            <View style={{ marginTop: 44 }}>
                                <ButtonComponent text="AVANÇAR" onPress={() => {
                                    if (currentPosition < 2) {
                                        setCurrentPosition(currentPosition + 1)
                                    }
                                }} />
                            </View>
                        </ContentComponent>
                    </ScrollComponent>
                </ContainerComponent>
            )}

            {currentPosition === 1 && (
                <ContainerComponent>
                    <ScrollComponent>
                        <ContentComponent>
                            <HeaderComponent onBack={() => setCurrentPosition(currentPosition - 1)} />
                            <View style={{ gap: 24 }}>
                                <InputComponent
                                    value={credentials2.endereco}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            endereco: value
                                        })
                                    }}
                                    label={'ENDEREÇO'}
                                />
                                <InputComponent
                                    value={credentials2.numero}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            numero: value
                                        })
                                    }}
                                    label={'NUMERO'}
                                />
                                <InputComponent
                                    value={credentials2.complemento}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            complemento: value
                                        })
                                    }}
                                    label={'COMPLEMENTO'}
                                />
                                <InputComponent
                                    value={credentials2.cep}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            cep: value
                                        })
                                    }}
                                    label={'CEP'}
                                />
                                <InputComponent
                                    value={credentials2.estado}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            estado: value
                                        })
                                    }}
                                    label={'ESTADO'}
                                />
                                <InputComponent
                                    value={credentials2.cidade}
                                    onChangeText={(value: string) => {
                                        setCredentials2({
                                            ...credentials2,
                                            cidade: value
                                        })
                                    }}
                                    label={'CIDADE'}
                                />

                            </View>
                            <View style={{ marginTop: 44 }}>
                                <ButtonComponent text="AVANÇAR" onPress={() => {
                                    if (currentPosition < 2) {
                                        setCurrentPosition(currentPosition + 1)
                                    }
                                }} />
                            </View>
                        </ContentComponent>
                    </ScrollComponent>
                </ContainerComponent>
            )}

            {currentPosition === 2 && (
                <ContainerComponent>
                    <ScrollComponent>
                        <ContentComponent>
                            <HeaderComponent onBack={() => setCurrentPosition(currentPosition - 1)} />
                            <InputComponent
                                value={credentials3.descricao_das_atividades}
                                onChangeText={(value: string) => {
                                    setCredentials3({
                                        ...credentials3,
                                        descricao_das_atividades: value
                                    })
                                }}
                                label={'DESCRIÇÃO DAS ATIVIDADES'}
                            />
                            
                            <View style={{marginTop: 12}}>
                                <InstructionTextComponent fontSize={16} text="Exemplo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit, in possimus inven "/>
                            </View>
                            <View style={{ marginTop: 44 }}>
                                <ButtonComponent text="SALVAR" onPress={() => {
                                    router.navigate('/(app)/(tabs)/profile/profile')
                                }} />
                            </View>
                        </ContentComponent>
                    </ScrollComponent>
                </ContainerComponent>
            )}
        </>
    );
}