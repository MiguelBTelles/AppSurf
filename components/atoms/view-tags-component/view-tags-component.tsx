import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { TagChipComponent } from "../tag-component/tag-chip-component";
import Ionicons from '@expo/vector-icons/Ionicons';

interface AddTagsComponentsProps {
    tags: string[];
}

export function ViewTagsComponents({ tags }: AddTagsComponentsProps) {
    return (
        <View style={{ gap: 12 }}>
            <Text style={{ marginLeft: 12, fontSize: 20, fontWeight: 500 }}>Tags</Text>

            <View style={{
                borderWidth: 1,
                borderColor: COLORS.grayText,
                borderRadius: 12,
                width: '100%',
                padding: 12,
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,

            }}>
                {tags.map((tag, index) => (
                    <TagChipComponent key={index} tag={tag} />
                ))}
            </View>
        </View>
    );
}
