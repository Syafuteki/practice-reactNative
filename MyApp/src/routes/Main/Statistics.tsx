import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constans/path';
import { Detail, Statistics } from '../../components/pages';

const Stack = createStackNavigator();

function StatisticsNavigator() {
    return (
        <Stack.Navigator initialRouteName={Statistics}>
            <Stack.Screen name={STATISTICS} component={Statistics} />
            <Stack.Screen name={DETAIL} component={Detail} />
        </Stack.Navigator>
    )
}

export default StatisticsNavigator;