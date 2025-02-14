import React from "react";
import { View, Image } from 'react-native';

interface LogoProps {
    width: number;
    height: number;
}

export function LogoComponent({width, height}: LogoProps) {
    return(
        <Image  source={require('../../../assets/images/logo.png')}
        style={{ width, height }}
        />
    )
}