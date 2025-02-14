import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
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
                        <HeaderComponent onBack={() => {router.navigate('/(app)/(tabs)/profile/profile')} } title='Seus Templates' />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )
}