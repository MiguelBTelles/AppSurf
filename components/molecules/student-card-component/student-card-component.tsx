import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS } from "@/constants/constants";

interface InstructionTextProps {
    image: ImageSourcePropType
    name: string
    onDelete: any
    edit: any
    classes: string
}

export function StudentCardComponent({ name, image, onDelete, edit, classes }: InstructionTextProps) {
    return (
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: COLORS.grayText, paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Image source={image}
                    style={{ width: 64, height: 64, borderRadius: 100, borderWidth: 1, borderColor: COLORS.grayText }} />
                <View>
                    <Text style={{ fontSize: 20 }}>
                        {name}
                    </Text>
                    <Text style={{fontSize: 16, color: COLORS.grayText}}>
                        {classes}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <TouchableOpacity onPress={edit}>
                    <Entypo name="dots-three-vertical" size={28} color={COLORS.grayText} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <FontAwesome6 name="delete-left" size={28} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}