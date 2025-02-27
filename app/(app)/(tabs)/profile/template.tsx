import { ContainerComponent } from '@/components/hoc/container-component/container-component';
import { ContentComponent } from '@/components/hoc/content-component/content-component';
import { ScrollComponent } from '@/components/hoc/scroll-component/scroll-component';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { HeaderComponent } from '../../../../components/molecules/header-component/header-component';
import { InputComponent } from '../../../../components/atoms/inputs/input-component/input-component';
import { AddTagsComponents } from '../../../../components/atoms/add-tags-component/add-tags-component';
import { ButtonComponent } from '../../../../components/atoms/button-component/button-component';
import { UploadImageComponent } from '@/components/atoms/upload-image-component/upload-image-component';


export default function CreateTemplate() {
    const router = useRouter();
    const params = useLocalSearchParams();

    const [credentials, setCredentials] = useState({
        class_name: params.title?.toString() || '',
        instructor: params.instructor?.toString() || '',
        student: params.student?.toString() || '',
        date: params.date?.toString() || '',
        horary: params.hour?.toString() || '',
        about_the_class: params.about_the_class?.toString() || '',
        value: params.value?.toString() || '',
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
                            onChangeText={(value: string) => setCredentials({ ...credentials, class_name: value })}
                            label="NOME DA AULA"
                        />
                        <InputComponent
                            value={credentials.instructor}
                            onChangeText={(value: string) => setCredentials({ ...credentials, instructor: value })}
                            label="INSTRUTOR"
                        />
                        <InputComponent
                            value={credentials.student}
                            onChangeText={(value: string) => setCredentials({ ...credentials, student: value })}
                            label="ALUNO"
                        />
                        <InputComponent
                            value={credentials.date}
                            onChangeText={(value: string) => setCredentials({ ...credentials, date: value })}
                            label="DATA"
                        />
                        <InputComponent
                            value={credentials.horary}
                            onChangeText={(value: string) => setCredentials({ ...credentials, horary: value })}
                            label="HORÁRIO"
                        />
                        <InputComponent
                            value={credentials.about_the_class}
                            onChangeText={(value: string) => setCredentials({ ...credentials, about_the_class: value })}
                            label="SOBRE A AULA"
                        />
                        <InputComponent
                            value={credentials.value}
                            onChangeText={(value: string) => setCredentials({ ...credentials, value: value })}
                            label="VALOR"
                        />
                        <AddTagsComponents tags={JSON.parse(typeof params.tags === 'string' ? params.tags : '[]')} />
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <ButtonComponent text="CRIAR" onPress={() => router.navigate('/(app)/(tabs)/profile/my-templates')} />
                    </View>
                </ContentComponent>
            </ScrollComponent>
        </ContainerComponent>
    );
}
