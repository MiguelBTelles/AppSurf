import { TagChipComponent } from "@/components/atoms/tag-component/tag-chip-component";
import { COLORS } from "@/constants/constants";
import React from "react";
import { View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { Chip } from 'react-native-paper';

interface ClassCardComponentProps {
    image: ImageSourcePropType,
    title: string,
    instructor: string,
    date: string,
    hour: string,
    tags?: string[]
    onPress: any
}

export function ClassCardComponent({ image, title, instructor, date, hour, tags = [], onPress }: ClassCardComponentProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                gap: 12,
                borderWidth: 1,
                borderColor: COLORS.grayText,
                flexDirection: 'row',
                padding: 12,
                flex: 1,
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 10 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            }}
        >
            <View>
                <Image
                    source={image}
                    style={{
                        width: 90,
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 12
                    }}
                />
            </View>
            <View style={{
                gap: 16,
                flex: 1,
                marginLeft: 12,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '600',
                    flexWrap: 'wrap',
                }}>
                    {title}
                </Text>
                <View>
                    <Text style={{ color: COLORS.grayText, fontSize: 16 }}>
                        PROFESSOR
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        {instructor}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: COLORS.grayText, fontSize: 16 }}>
                            DATA
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            {date}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.grayText, fontSize: 16 }}>
                            HORÁRIO
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            {hour}
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                    {tags.map((tag, index) => (
                        <TagChipComponent key={index} tag={tag} />
                    ))}
                </View>

            </View>
        </TouchableOpacity>
    )
}
