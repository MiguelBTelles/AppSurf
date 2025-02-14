import { COLORS } from '@/constants/constants';
import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface InstructorsListProps {
    label: string,
    perfil: ImageSourcePropType,
    onPress: any,
    addInstructor: any,
    instructors?: number
    
}

export function InstructorsListComponent({ label, perfil, onPress, instructors }: InstructorsListProps) {
    return (
        <View style={{ gap: 12, borderBottomWidth: 1, borderColor: COLORS.grayText, paddingBottom: 12 }}>
            <Text style={{color: COLORS.grayText}}>
                {label}
            </Text>
            <View style={{ gap: 12, flexDirection: 'row' }}>
            {Array(instructors).fill(0).map((_, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={{
                            width: 70,  
                            height: 70, 
                            borderRadius: 100, 
                            overflow: 'hidden',
                            borderWidth: 1,
                            borderColor: COLORS.grayText
                        }}
                        onPress={onPress}
                    >
                        <Image 
                            source={perfil}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover'
                            }}
                        />
                    </TouchableOpacity>
                    
                ))}
                <TouchableOpacity style={{
                    width: 70,  
                    height: 70, 
                    borderRadius: 100, 
                    overflow: 'hidden',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Ionicons name="add" size={60} color={'black'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}