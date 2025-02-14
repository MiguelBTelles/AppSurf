import { ButtonComponent } from "@/components/atoms/button-component/button-component";
import { InputComponent } from "@/components/atoms/inputs/input-component/input-component";
import { InstructionTextComponent } from "@/components/atoms/instruction-text-component/instruction-text-component";
import { ContainerComponent } from "@/components/hoc/container-component/container-component";
import { ContentComponent } from "@/components/hoc/content-component/content-component";
import { ScrollComponent } from "@/components/hoc/scroll-component/scroll-component";
import { HeaderComponent } from "@/components/molecules/header-component/header-component";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text } from 'react-native';

export default function ForgotPassword() {
    const initialState = {
        email: ''
    };
    const router = useRouter();
    const [data, setData] = useState(initialState);
    const handleInput = (key: string, value: string) => setData({ ...data, [key]: value })

    return (
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <HeaderComponent title={'Recuperar senha'} onBack={() => router.back()} />
                    <View style={{ marginTop: 80 }}>
                        <InstructionTextComponent
                            text={'Por favor informe seu email abaixo, para que possamos enviar uma nova senha'}
                        />
                    </View>
                    <View style={{marginTop: 40, gap: 40}}>
                        <InputComponent
                            value={data.email}
                            onChangeText={(value: string) => handleInput('email', value)}
                            label={'EMAIL'}
                        />
                        <ButtonComponent
                            text={"ENVIAR"}
                            onPress={() => router.navigate('/')}
                        />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )

}