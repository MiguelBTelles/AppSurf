import { COLORS } from "@/constants/constants";
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchInputComponentProps {
    value: string;
    onChangeText: any;
    label?: string;
    hasBorder?: boolean; 
}

export function SearchInputComponent({ value, onChangeText, label, hasBorder = true }: SearchInputComponentProps) {
    return (
        <View style={[styles.InputContainer, !hasBorder && styles.noBorder]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="search" size={24} color={COLORS.grayText} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    InputContainer: {
        gap: 10,
        
    },
    noBorder: {
        borderBottomWidth: 0, 
    },
    label: {
        color: COLORS.grayText,
        fontSize: 14,
        marginLeft: 12,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.searchInput,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 20,
    },
    icon: {
        marginLeft: 8,
    },
});

