import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Button, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButton, AnchorButton, Label, CurvedButton } from '../../common/components';

export const Login = ({ navigation }) => {
    return (
        <Formik
            initialValues={{ email: '', password: "" }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "white" }}>

                    <View style={{ marginVertical: 50 }}>
                        <Label center xl style={{}} title={"LOGIN"} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <CurvedButton
                            icon="google"
                            color={"white"}
                            backgroundColor={"#DB4437"}
                            onPress={() => { }}
                            title={"Google"} />

                        <CurvedButton
                            icon="facebook"
                            color={"white"}
                            backgroundColor={"#3577E5"}
                            onPress={() => { }}
                            title={"Facebook"} />
                    </View>

                    <View style={{ marginVertical: 30 }} />

                    <TextInput
                        onChangeText={handleChange('email')}
                        label='Email'
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        label='password'
                        value={values.password}
                    />
                    <View style={{ marginVertical: 30 }} />

                    <GradientButton
                        onPress={() => {
                            navigation.navigate("LoggedIN");
                        }}
                        title={"Log in"} />
                    <AnchorButton title={"Forgot Password"} />
                    <AnchorButton onPress={() => {
                        navigation.navigate("Register");
                    }} title={"Sign Up"} />

                </View>
            )}
        </Formik>
    )
}