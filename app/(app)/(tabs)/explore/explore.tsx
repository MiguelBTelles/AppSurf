import { AddClassComponent } from '@/components/atoms/add-class-component/add-class-component';
import { SearchInputComponent } from '@/components/atoms/inputs/search-input-component/search-input-component';
import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { ClassCardComponent } from '@/components/molecules/class-card-component/class-card-component';
import { HeaderComponent } from '@/components/molecules/header-component/header-component';
import { InstructorsListComponent } from '@/components/molecules/instructors-list-component/instructors-list-component';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Explore() {
  const router = useRouter();

  return (
    <ContainerComponent>
      <ScrollComponent>
        <ContentComponent>
          <View style={{marginTop:20, marginBottom: 8}}>
            <HeaderComponent title='Explorar' />
          </View>
          <View style={{gap: 20}}>
            <SearchInputComponent label={'PROCURAR AULAS'} value={''} onChangeText={undefined} />
            <InstructorsListComponent label='INSTRUTORES' onPress={undefined} addInstructor={undefined} perfil={require('../../../../assets/images/user.png')} instructors={3}/>
            <AddClassComponent onPress={()=>{router.navigate('/(app)/(tabs)/explore/create-class')}}/>
          </View>
          <View style={{gap: 24, marginTop: 12}}>
            <ClassCardComponent image={require('../../../../assets/images/Image.jpg')} title={'Aula de surf na praia do Arpoador  '} instructor='Miguel Bastos' date={'28 de jun'} hour={'09:10 - 09:50'} tags={['Avançado', 'Ondas Grandes',]} onPress={()=>{router.navigate('/(app)/(tabs)/explore/class')}} />
            <ClassCardComponent image={require('../../../../assets/images/Image.jpg')} title={'Aula de surf na praia do Arpoador  '} instructor='Miguel Bastos' date={'28 de jun'} hour={'09:10 - 09:50'} tags={['Avançado', 'Ondas Grandes',]} onPress={()=>{router.navigate('/(app)/(tabs)/explore/class')}} />
            <ClassCardComponent image={require('../../../../assets/images/Image.jpg')} title={'Aula de surf na praia do Arpoador  '} instructor='Miguel Bastos' date={'28 de jun'} hour={'09:10 - 09:50'} tags={['Avançado', 'Ondas Grandes',]} onPress={()=>{router.navigate('/(app)/(tabs)/explore/class')}} />
          </View>
        </ContentComponent>
      </ScrollComponent>
    </ContainerComponent>
  );
}

