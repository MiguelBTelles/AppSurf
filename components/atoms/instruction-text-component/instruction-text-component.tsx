import { COLORS } from "@/constants/constants";
import React from "react";
import { Text, StyleSheet } from 'react-native';

interface InstructionTextComponentProps {
    text: string;
    fontSize?: number; 
}

export function InstructionTextComponent({ text, fontSize = 20 }: InstructionTextComponentProps) {
    return (
        <Text style={[styles.pageTitleComponent, { fontSize }]}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    pageTitleComponent: {
        color: COLORS.grayText,
        textAlign: "center",
    }
});
