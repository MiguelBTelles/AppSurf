import { COLORS } from "@/constants/constants";
import React from "react";
import { Text, View } from 'react-native';

interface ValueComponentProps {
    value: string;
}

export function ValueComponent({ value }: ValueComponentProps) {
    return (
        <View style={{flexDirection: 'row', gap: 8}}>
            <Text style={{fontSize: 16, color: COLORS.grayText}}>VALOR:</Text>
            <Text style={{fontSize: 16, color: COLORS.bluePrimary}}>{value}</Text>
        </View>
    );
}