import React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Alert } from 'react-native';

export const GradientButton = ({ onPress, title }) => {
    return (
        <TouchableRipple onPress={onPress} >
            <LinearGradient
                colors={['#0081EF', '#00EDAE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 100 }}>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
                    backgroundColor: 'transparent',
                }}>{title}</Text>
            </LinearGradient>
        </TouchableRipple>

    )
}
