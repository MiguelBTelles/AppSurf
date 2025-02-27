import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '@/constants/constants';

interface IconValueComponentProps {
    value: string
    icon: string
}

export function IconValueComponent({ value, icon }: IconValueComponentProps) {
    return (
        <View style={styles.content}>
            <AntDesign name={icon as any} size={26} color={COLORS.grayText} />
            <Text style={styles.text}>
                {value}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    text: {
        color: COLORS.grayText,
        fontSize: 18
    }
})