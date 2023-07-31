import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/AuthScreen/Login';
import SignUp from '../screens/AuthScreen/SignUp';
const Auth = createStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name = "Login"
                component = {Login}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "SignUp"
                component = {SignUp}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}