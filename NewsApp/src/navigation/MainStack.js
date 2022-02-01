import React from 'react'
import {View, Text} from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import SplashScreen from '@Screen/SplashScreen'
import Login from '@Screen/Login'
import Register from '@Screen/Register'
import Onboarding from '@Screen/Onboarding'
import NewsDetails from '../screens/NewsDetails'

import CategoryList from '../screens/CategoryList'
import About from '../screens/About'


const MainStack = () =>{

    const Stack = createStackNavigator()

    

    return (
        <Stack.Navigator

        screenOptions={{
            headerShown: false
        }}
        
        initialRoutName="Splash"

        >
            
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Tab" component={Tabs}/>

            
            <Stack.Screen name="NewsDetails" component={NewsDetails}/>
            <Stack.Screen name="CategoryList" component={CategoryList}/>
            <Stack.Screen name="About" component={About}/>

        </Stack.Navigator>
    )
}

export default MainStack