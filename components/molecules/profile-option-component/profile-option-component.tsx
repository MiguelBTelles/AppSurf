import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/constants/constants";

interface ProfileOptionComponentProps {
    optionName: string;
    onPress: any
}

export function ProfileOptionComponent({ optionName, onPress }: ProfileOptionComponentProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.optionName}>
                {optionName}
            </Text>
            <View>
                <AntDesign name="right" size={16} color="black" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grayBorderLight, 
        paddingBottom: 20
    },
    optionName: {
        fontSize: 20,
    },
});
