import { ButtonComponent } from '@/components/atoms/button-component/button-component';
import { InputComponent } from '@/components/atoms/inputs/input-component/input-component';
import { TextLinkComponent } from '@/components/atoms/text-link-component/text-link-component';
import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { LogoComponent } from '@/components/atoms/logo-component/logo-component';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function SignIn() {

  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: 'rockapps@rockapps.com.br',
    password: 'RkImpersonate@1'
  });

  return (
    <ContainerComponent>
      <ScrollComponent>
        <ContentComponent>
          <View style={{ alignItems: 'center', marginTop: 80 }}>
            <LogoComponent width={180} height={180} />
          </View>
          <View style={{ marginTop: 40, gap: 40 }}>
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
              isPassword
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
          <View style={{ marginTop: 40, alignItems: 'center', gap: 40 }}>
            <TextLinkComponent
              text={'Esqueceu sua senha? '}
              link={'Clique aqui'}
              onPress={() => router.push('/forgot-password')}
            />
            <ButtonComponent
              text={'ENTRAR'}
              onPress={() => router.navigate('/home')}
            />
            <TextLinkComponent
              text={'Não tem uma conta? '}
              link={'Cadastre-se'}
              onPress={() => router.navigate('/sign-up')}
            />
          </View>
        </ContentComponent>
      </ScrollComponent>
    </ContainerComponent>
  );
}

