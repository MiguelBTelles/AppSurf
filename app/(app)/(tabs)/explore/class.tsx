import { ButtonComponent } from '@/components/atoms/button-component/button-component';
import { InputPerfilComponent } from '@/components/atoms/inputs/input-perfil-component/input-perfil-component';
import { PageTitleComponent } from '@/components/atoms/page-title-component/page-title-component';
import { TextWithTitleComponent } from '@/components/atoms/text-with-title-component/text-with-title-component';
import { ValueComponent } from '@/components/atoms/value-component/value-component';
import { ViewTagsComponents } from '@/components/atoms/view-tags-component/view-tags-component';
import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { DateAndHourComponent } from '@/components/molecules/date-and-hour-component/date-and-hour-component';
import { HeaderComponent } from '@/components/molecules/header-component/header-component';
import { COLORS } from '@/constants/constants';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Title } from 'react-native-paper';

export default function Class() {
    const router = useRouter();
    return (
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <HeaderComponent onBack={() => { router.navigate('/(app)/(tabs)/explore/explore')}} />
                    <View style={{ marginHorizontal: -24, }}>
                        <Image source={require('../../../../assets/images/praia.jpg')}
                            style={{ width: '100%', height: 220 }}
                        />
                        <Title style={{ textAlign: 'center', marginTop: 20, fontWeight: 700, fontSize: 30, borderBottomWidth: 1, borderBottomColor: COLORS.grayText, paddingBottom: 20, marginHorizontal: -24 }}>
                            Aula de surf na praia do Arpoador
                        </Title>
                    </View>
                    <View style={{ gap: 20, marginTop: 40 }}>
                        <ValueComponent value='R$ 50,00' />
                        <DateAndHourComponent date='15 de Fev de 2020' hour='09:10 - 09:50' />
                        <InputPerfilComponent label='INSTRUTOR' value='' />
                        <InputPerfilComponent label='ALUNO' value='' />
                        <TextWithTitleComponent title='Sobre a aula' text='O objetivo desta iniciativa é promover um encontro empresarial que fomente a realização de negócios entre empresas demandantes de bens e serviços, chamadas de empresa âncora, e empresas fornecedoras da região.' />
                        <ViewTagsComponents tags={['surf', 'praia', 'esporte']} />
                        <ButtonComponent text='FECHAR' onPress={() => { }} />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )
}