import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from "@/constants/constants";

interface AddClassComponentProps {
    onPress: any
}

export function AddClassComponent({onPress}: AddClassComponentProps) {
    return (
        <TouchableOpacity style={{ gap: 12, flexDirection:  'row', alignItems: 'center', justifyContent: 'flex-end' }} onPress={onPress}>
            <Text style={{color: COLORS.grayText, fontSize: 16}}>
                ADICIONAR AULA
            </Text>
            <Ionicons name="add-circle-sharp" size={24} color={COLORS.link} />
        </TouchableOpacity>
    )
}