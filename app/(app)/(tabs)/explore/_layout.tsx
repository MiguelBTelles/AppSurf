
import { Stack } from 'expo-router';
import 'react-native-reanimated';



export default function Layout() {

  return (

    <Stack>
      <Stack.Screen name='explore' options={{ headerShown: false }} />
      <Stack.Screen name='class' options={{ headerShown: false }} />
      <Stack.Screen name='create-class' options={{ headerShown: false }} />
    </Stack>

  );
}
