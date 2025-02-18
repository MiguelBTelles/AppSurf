import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text } from 'react-native';
import { TagChipComponent } from "../tag-component/tag-chip-component";
import Ionicons from '@expo/vector-icons/Ionicons';

interface AddTagsComponentsProps {
    tags: string[]; 
}

export function AddTagsComponents({ tags }: AddTagsComponentsProps) {
    return (
        <View style={{ gap: 12 }}>
            <Text style={{ marginLeft: 12, color: COLORS.grayText, fontSize: 16 }}>ADICIONAR TAGS</Text>
            
            <View style={{
                borderWidth: 1,
                borderColor: COLORS.grayText,
                borderRadius: 12,
                width: '100%',
                height: 100,
                padding: 12,
                flexDirection: "row",
                flexWrap: "wrap",  
                gap: 8, 
                
            }}>
                {tags.map((tag, index) => (
                    <TagChipComponent key={index} tag={tag} />
                ))}
                <Ionicons name="add-circle" size={28} color={COLORS.grayText} />
            </View>
        </View>
    );
}
