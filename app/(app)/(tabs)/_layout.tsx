import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS } from '@/constants/constants';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.bluePrimary,
        tabBarInactiveTintColor: 'rgba(0, 0, 255, 0.2)',
        headerShown: false,
        tabBarStyle: {
					borderTopWidth: 0,
					paddingTop: 20,
          height: 80
				},
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome6 name="house-chimney" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="window" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}
