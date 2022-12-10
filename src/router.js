import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createStackNavigator} from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Detail1 from './pages/Detail1';
import Categories from './pages/Categories';
import About from './pages/About';
import Card from './pages/Card';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail1"
                component={Detail1}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Categories"
                component={Categories}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="About"
                component={About}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Card"
                component={Card}
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;