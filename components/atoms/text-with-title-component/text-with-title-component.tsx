import React from 'react';
import { View, Text, Image } from 'react-native';

interface TextWithTitleComponentProps {
    title: string;
    text: string;
}

export function TextWithTitleComponent({ title, text }: TextWithTitleComponentProps) {
    return (
        <View style={{ gap: 16}}>
            <Text style={{ fontWeight: 500, fontSize: 20}}>
                {title}
            </Text>
            <Text style={{ fontSize: 16}}>
                {text}
            </Text>
        </View>
    )
}