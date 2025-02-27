import { ButtonComponent } from '@/components/atoms/button-component/button-component';
import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { ClassCardComponent } from '@/components/molecules/class-card-component/class-card-component';
import { HeaderComponent } from '@/components/molecules/header-component/header-component';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native'

export default function MyTemplates() {
    const router = useRouter()
    return (
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <View>
                        <HeaderComponent onBack={() => { router.navigate('/(app)/(tabs)/profile/profile') }} title='Seus Templates' />
                    </View>
                    <View style={{ gap: 24, marginTop: 40 }}>
                        <ClassCardComponent image={require('../../../../assets/images/Image.jpg')} title={'Aula de surf na praia do Arpoador  '} instructor='Miguel Bastos' date={'28 de jun'} hour={'09:10 - 09:50'} tags={['Avançado', 'Ondas Grandes',]} onPress={
                            () => {
                                router.push({
                                    pathname: '/(app)/(tabs)/profile/template',
                                    params: {
                                        image: '../../../../assets/images/Image.jpg',
                                        title: 'Aula de surf na praia do Arpoador',
                                        instructor: 'Miguel Bastos',
                                        student: 'João',
                                        date: '28 de jun',
                                        hour: '09:10 - 09:50',
                                        about_the_class: 'Aula de surf para iniciantes',
                                        value: 'R$ 50,00',
                                        tags: JSON.stringify(['Avançado', 'Ondas Grandes'])
                                    }
                                });
                            }} />
                        <ClassCardComponent image={require('../../../../assets/images/Image.jpg')} title={'Aula de surf na praia do Arpoador  '} instructor='Miguel Bastos' date={'28 de jun'} hour={'09:10 - 09:50'} tags={['Avançado', 'Ondas Grandes',]} onPress={
                            () => {
                                router.push({
                                    pathname: '/(app)/(tabs)/profile/template',
                                    params: {
                                        image: '../../../../assets/images/Image.jpg',
                                        title: 'Aula de surf na praia do Arpoador',
                                        instructor: 'Miguel Bastos',
                                        student: 'João',
                                        date: '28 de jun',
                                        hour: '09:10 - 09:50',
                                        about_the_class: 'Aula de surf para iniciantes',
                                        value: 'R$ 50,00',
                                        tags: JSON.stringify(['Avançado', 'Ondas Grandes'])
                                    }
                                });
                            }} />
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <ButtonComponent text='CRIAR' onPress={() => { router.navigate('/(app)/(tabs)/profile/create-template') }} />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )
}