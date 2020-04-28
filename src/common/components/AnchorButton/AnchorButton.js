import React from 'react';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Alert } from 'react-native';

export const AnchorButton = ({ title, ...rest }) => {
    return (
        <Button
            uppercase={false}
            labelStyle={{
                textDecorationLine: 'underline'
            }}
            {...rest}
        >{title}</Button>
    )
}
