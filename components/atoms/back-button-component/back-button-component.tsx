import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {IconWithCardRound} from '@/components/atoms/icon-with-card-round/icon-with-card-round';

interface BackButtonComponentProps {
    onPress:any
}

export function BackButtonComponent({onPress}: BackButtonComponentProps) {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <IconWithCardRound icon={'left'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
    
    }
})