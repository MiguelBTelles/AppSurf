
import { Stack } from 'expo-router';
import 'react-native-reanimated';



export default function Layout() {

  return (

    <Stack>
      <Stack.Screen name='profile' options={{ headerShown: false }} />
      <Stack.Screen name='personal-info' options={{ headerShown: false}} />
      <Stack.Screen name='my-instructors' options={{ headerShown: false }} />
      <Stack.Screen name='my-students' options={{ headerShown: false }} />
      <Stack.Screen name='my-company' options={{ headerShown: false }} />
      <Stack.Screen name='add-instructor' options={{ headerShown: false }} />
      <Stack.Screen name='add-student' options={{ headerShown: false }} />
      <Stack.Screen name='my-templates' options={{ headerShown: false }} />
    </Stack>

  );
}
