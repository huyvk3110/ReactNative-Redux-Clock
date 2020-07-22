import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeContainer from "../containers/TimeContainer";
import StopWatchContainer from "../containers/StopWatchContainer";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Time"
                    component={TimeContainer}
                    options={{
                        title: "Time"
                    }}
                />
                <Tab.Screen
                    name="StopWatch"
                    component={StopWatchContainer}
                    options={{
                        title: "StopWatch"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}