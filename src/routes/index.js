import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

import Airplane from '../screens/Airplane'
import Car from '../screens/Car'
import Info from '../screens/Info'
import { styles } from '../styles'

const { Navigator, Screen } = createBottomTabNavigator()

export function Routes(){
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#26944d" />
            <Navigator screenOptions={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'black',
                tabBarActiveBackgroundColor: styles.colors.primary,
                headerShown: false,
            }}>
                <Screen 
                    name="Aéreo"
                    component={Airplane}
                    options={{
                        tabBarIcon:({size, color})=> <Ionicons name="md-airplane-sharp" size={size} color={color} />
                    }}
                />

                <Screen 
                    name="Terrestre"
                    component={Car}
                    options={{
                        tabBarIcon:({size, color})=> <Ionicons name="car-sharp" size={size} color={color} />
                    }}
                />
                <Screen 
                    name="Informações"
                    component={Info}
                    options={{
                        tabBarIcon:({size, color})=> <Octicons name="question" size={size} color={color} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}