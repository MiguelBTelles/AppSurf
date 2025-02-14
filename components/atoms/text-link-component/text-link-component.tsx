import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS } from '../../../constants/constants'


interface TextLinkComponentProps {
    text?: string
    link: string
    onPress: any
}

export function TextLinkComponent({ text, link, onPress }: TextLinkComponentProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.forgotPwd}>
                {text}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.clickHere}>
                    {link}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    },
    forgotPwd: {
        fontSize: 18,
        color: COLORS.grayText
    },
    clickHere: {
        fontSize: 18,
        color: COLORS.link
    },
})