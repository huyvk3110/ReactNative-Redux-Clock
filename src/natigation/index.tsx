import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeContainer from "../containers/TimeContainer";
import StopWatchContainer from "../containers/StopWatchContainer";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator
                tabBarOptions={{
                    
                }}
            >
                <Tab.Screen
                    name="Time"
                    component={TimeContainer}
                    options={{
                        title: "Time",
                        tabBarIcon: ({color,focused,size})=>{
                            return <Image source={require('../assets/png/clock.png')} style={{
                                
                            }}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="StopWatch"
                    component={StopWatchContainer}
                    options={{
                        title: "StopWatch",
                        tabBarIcon: ({color,focused,size})=>{
                            return <Image source={require('../assets/png/stop-watch.png')} style={{
                                
                            }}/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}