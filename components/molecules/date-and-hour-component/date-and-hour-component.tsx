import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/constants/constants";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { IconValueComponent } from "@/components/atoms/icon-value-component/icon-value-component";

interface DateAndHourComponentProps {
    date: string
    hour: string
}

export function DateAndHourComponent({ date, hour }: DateAndHourComponentProps) {
    return (
        <View style={styles.container}>
            <IconValueComponent value={date} icon={'calendar'} />
            <IconValueComponent value={hour} icon={'clockcircleo'} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
})