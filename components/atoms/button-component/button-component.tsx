import React from "react";
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from "react-native";
import { COLORS } from "@/constants/constants";

interface ButtonComponentProps {
    text: string
    onPress: any
    loading?: boolean
    style?: any
}

export function ButtonComponent({ text, onPress, loading, style }: ButtonComponentProps) {
    return (
        <TouchableOpacity style={{...styles.btnLogin, ...style}} onPress={onPress}>
            <Text style={styles.btnLoginText}>
                {text}
            </Text>
            {loading ? (
                <ActivityIndicator color={'white'}/>
            ) : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    btnLogin: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.bluePrimary,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 12
    },
    btnLoginText: {
        color: '#FFF',
        fontSize: 18,
    },
})