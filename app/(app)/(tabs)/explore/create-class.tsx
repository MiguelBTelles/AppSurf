import { AddTagsComponents } from '@/components/atoms/add-tags-component/add-tags-component';
import { ButtonComponent } from '@/components/atoms/button-component/button-component';
import { InputComponent } from '@/components/atoms/inputs/input-component/input-component';
import { InputPerfilComponent } from '@/components/atoms/inputs/input-perfil-component/input-perfil-component';
import { UploadImageComponent } from '@/components/atoms/upload-image-component/upload-image-component';
import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { HeaderComponent } from '@/components/molecules/header-component/header-component';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native'

export default function CreateClass() {
    const router = useRouter()
    const [credentials, setCredentials] = useState({
        class_name: '',
        instructor: '',
        student: '',
        date: '',
        horary: '',
        about_the_class: '',
        value: '',
    });

    return (
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <View style={{ marginBottom: 20 }}>
                        <HeaderComponent onBack={() => { router.navigate('/(app)/(tabs)/profile/my-templates') }} />
                    </View>
                    <View style={{ gap: 24 }}>
                        <UploadImageComponent onPress={undefined} />
                        <InputComponent
                            value={credentials.class_name}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    class_name: value
                                })
                            }}
                            label={'NOME DA AULA'}
                        />
                        <InputPerfilComponent
                           label='INSTRUTOR'
                        />
                        <InputPerfilComponent
                           label='ALUNO'
                        />
                        <InputComponent
                            value={credentials.date}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    date: value
                                })
                            }}
                            label={'DATA'}
                        />
                        <InputComponent
                            value={credentials.horary}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    horary: value
                                })
                            }}
                            label={'HORÁRIO'}
                        />
                        <InputComponent
                            value={credentials.about_the_class}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    about_the_class: value
                                })
                            }}
                            label={'SOBRE A AULA'}
                        />
                        <InputComponent
                            value={credentials.value}
                            onChangeText={(value: string) => {
                                setCredentials({
                                    ...credentials,
                                    value: value
                                })
                            }}
                            label={'VALOR'}
                        />
                        <AddTagsComponents tags={['Avançado', 'Ondas Grandes']} />
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <ButtonComponent text='CRIAR' onPress={() => { router.navigate('/(app)/(tabs)/profile/my-templates') }} />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )

}