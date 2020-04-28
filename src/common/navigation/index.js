import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from '../../Dashboard/Home/Home';
import { Settings } from '../../Dashboard/Settings/Settings';
import { Profile } from '../../Dashboard/Profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../Authentication/Login/Login';
import { Register } from '../../Authentication/Register/Register';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator style={{ flex: 1 }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Settings} />
            <Tab.Screen name="Settings" component={Profile} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

export const Authentication = () => {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Register" component={Register} />
            {/* // Todo Covert TabNavigator as switch navigator later */}
            <Stack.Screen name="LoggedIN" component={TabNavigator} />
        </Stack.Navigator>
    );
}