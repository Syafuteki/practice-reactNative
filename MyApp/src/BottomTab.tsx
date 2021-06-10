import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// いずれそれぞれの画面を呼び出す
function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

function Edit() {
    return (
        <View>
            <Text>Edit</Text>
        </View>
    )
}

function Setting() {
    return (
        <View>
            <Text>Setting</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Edit" component={Edit} />
        <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
}

export default function BottomTab() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})