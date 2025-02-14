import React from "react";
import { Text, StyleSheet } from 'react-native'

interface PageTitleComponentProps {
    title: string;
    size?: number;
}

export function PageTitleComponent({ title, size = 20 }: PageTitleComponentProps) {
    return (
        <Text style={[styles.pageTitleComponent, { fontSize: 30 }]}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    pageTitleComponent: {
        color: 'black',
        fontWeight: '700',
        flexWrap: 'wrap',
    }
});
