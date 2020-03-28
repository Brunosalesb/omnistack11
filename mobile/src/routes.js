//#region IMPORTS
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from './pages/detalhes';
import Casos from './pages/casos';
//#endregion

//#region CONST
const AppStack = createStackNavigator();
//#endregion

export default function Routes(props) {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Casos" component={Casos} />
                <AppStack.Screen name="Detalhes" component={Detalhes} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}