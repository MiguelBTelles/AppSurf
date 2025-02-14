import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { UserHeader } from '@/components/molecules/user-bar-with-ntf-container/user-header';
import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ContainerComponent>
      <ScrollComponent>
        <ContentComponent>
          <View style={{marginTop: 20}}>
            <UserHeader onPress={undefined} />
          </View>
        </ContentComponent>
      </ScrollComponent>
    </ContainerComponent>
  );
}

