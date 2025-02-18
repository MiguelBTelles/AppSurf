import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/constants/constants";

interface UploadImageComponentProps {
    onPress: any
}

export function UploadImageComponent({onPress}: UploadImageComponentProps) {
    return (
        <View style={{
            gap: 12
        }}>
            <Text style={{color: COLORS.grayText}}>
                ADICIONAR IMAGEM
            </Text>
            <TouchableOpacity  onPress={onPress} style={{
                borderWidth: 1,
                borderColor: COLORS.grayText,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 172,
                gap: 8,
                borderRadius: 8
            }}>
                <AntDesign name="upload" size={24} color={COLORS.grayText} />
                <Text style={{color: COLORS.grayText}}>
                    UPLOAD DE ARQUIVOS
                </Text>
            </TouchableOpacity>
        </View>
    )
}