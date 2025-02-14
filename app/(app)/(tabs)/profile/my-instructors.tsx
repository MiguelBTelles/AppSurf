import { ButtonComponent } from "@/components/atoms/button-component/button-component";
import { ContainerComponent } from "@/components/hoc/container-component/container-component";
import { ContentComponent } from "@/components/hoc/content-component/content-component";
import { ScrollComponent } from "@/components/hoc/scroll-component/scroll-component";
import { HeaderComponent } from "@/components/molecules/header-component/header-component";
import { InstructorCardComponent } from "@/components/molecules/instructor-card-component/instructor-card-component";
import { useRouter } from "expo-router";
import React from "react";
import {View, Text} from 'react-native'

export default function MyInstructos() {
    const router = useRouter()
    return(
        <ContainerComponent>
            <ScrollComponent>
                <ContentComponent>
                    <HeaderComponent title="Meus Instrutores" onBack={()=>{router.navigate('/(app)/(tabs)/profile/profile')}}/>
                    <View style={{marginTop: 20, gap: 24}}>
                        <InstructorCardComponent name="Miguel Bastos" onDelete={undefined} edit={undefined} image={require('../../../../assets/images/logo.png')} />
                        <InstructorCardComponent name="Fernando Silva" onDelete={undefined} edit={undefined} image={require('../../../../assets/images/logo.png')} />
                        <InstructorCardComponent name="Lucas Santos" onDelete={undefined} edit={undefined} image={require('../../../../assets/images/logo.png')} />
                        <InstructorCardComponent name="Paulo Victor" onDelete={undefined} edit={undefined} image={require('../../../../assets/images/logo.png')} />
                    </View>
                    <View style={{marginTop: 40}}>
                        <ButtonComponent text="ADICIONAR NOVO" onPress={()=>{router.navigate('/(app)/(tabs)/profile/add-instructor')}}/>
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    )
}