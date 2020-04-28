import React from 'react';
import { Text } from 'react-native-paper';
import { theme } from '../../theme';

export const Label = ({
    title,
    size,
    regular,
    center,
    xs,
    s,
    m,
    l,
    xl,
    xxl,
    style,
    ...rest }) => {

    let newStyle = {
        fontSize: 16
    };

    // Assign Font Colors
    regular && (newStyle["color"] = "#9B9B9B");

    // Align Self
    center && (newStyle["alignSelf"] = "center");

    // Easily Set Font Sizes
    xs && (newStyle["fontSize"] = theme.fontSizes["xs"]);
    s && (newStyle["fontSize"] = theme.fontSizes["s"]);
    m && (newStyle["fontSize"] = theme.fontSizes["m"]);
    l && (newStyle["fontSize"] = theme.fontSizes["l"]);
    xl && (newStyle["fontSize"] = theme.fontSizes["xl"]);
    xxl && (newStyle["fontSize"] = theme.fontSizes["xxl"]);

    return (<Text
        style={{ fontWeight: "500", ...newStyle, ...style }}
        {...rest}
    >{title}</Text>)
}
