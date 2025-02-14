import React, {useContext, useEffect} from 'react';
import {Redirect, Stack, useRouter} from 'expo-router';


export default function RootLayout() {
	return <RootLayoutNav/>;
}

function RootLayoutNav() {
	const router = useRouter()

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{headerShown: false, gestureEnabled: false}}/>
		</Stack>
	);
}
