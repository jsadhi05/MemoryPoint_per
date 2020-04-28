import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
    default: {
        regular: {
            fontFamily: 'roboto',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'roboto-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'roboto-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'roboto-thin',
            fontWeight: 'normal',
        },
    },
};

export const theme = {
    ...DefaultTheme,

    fonts: configureFonts(fontConfig),

    colors: {
        ...DefaultTheme.colors,
        primary: '#00C3C6',
        text: '#00C3C6',
        placeholder: '#A1A1A1',
        background: "transparent"
    },
    fontSizes: {
        xs: 12,
        s: 14,
        m: 16,
        l: 18,
        xl: 20,
        xxl: 22,
    }
}