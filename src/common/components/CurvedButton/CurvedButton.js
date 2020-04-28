import React from 'react';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Alert } from 'react-native';

export const CurvedButton = ({ title, contentStyle, backgroundColor, ...rest }) => {
    return (<Button
        uppercase={false}
        contentStyle={{ textAlign: "center", height: 40, ...contentStyle }}
        style={{ backgroundColor: "black", borderRadius: 50, backgroundColor }}
        color={"#00C3C6"}
        {...rest}
    >{title}</Button>)
}
