import React from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN, STATISTICS } from '../../constans/path';
import { Initial, Loading, Home, ChooseLogin, Statistics } from '../../components/pages';
import * as UiContext from '../../contexts/ui';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const forFade = ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
        opacity: current.progress,
    }
})

function TabRoutes() {
    return (
        <Tab.Navigator initialRouteName={HOME}>
            <Tab.Screen name={HOME} component={Home} />
            <Tab.Screen name={STATISTICS} component={Statistics} />
        </Tab.Navigator>
    )
}

function switchingAuthStatus(status: UiContext.Status) {
    switch (status) {
        case UiContext.Status.UN_AUTHRIZED:
            return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />
        case UiContext.Status.AUTHORIZED:
            return <Stack.Screen name={HOME} component={TabRoutes} />
        case UiContext.Status.FIRST_OPEN:
        default:
            return <Stack.Screen name={INITIAL} component={Initial} />
    }
}

function AuthWithRoutes() {
    const uiContext = React.useContext(UiContext.Context);

    return (
        <Stack.Navigator
            initialRouteName={LOADING}
            headerMode="none"
            screenOptions={{
                cardStyleInterpolator: forFade,
            }}
        >
            {/* 今のステートがLOADINGではない場合1つ目、同じ場合2つ目になる */}
            {uiContext.applicationState !== UiContext.Status.LOADING ? (
                // ここでスイッチ分で分岐するスタック画面を呼ぶ関数を置く
                switchingAuthStatus(uiContext.applicationState)
            ) : (
                <Stack.Screen name={LOADING} component={Loading} />
            )}
        </Stack.Navigator>
    )
}

export default AuthWithRoutes;