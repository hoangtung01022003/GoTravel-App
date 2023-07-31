import { Component, useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { HomeScreen, History } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, images } from "../constain";

const Tab = createBottomTabNavigator();
const UITab = () => {
    const renderTabBarIcon = ({ focused: boolean, color: string, size: number }, route) => {
        return (
            <Image source={route.name == 'HomeScreen'
                ? images.home : route.name == 'History'
                    ? images.order1 : 'wrench'} style={{ width: 20, height: 20 }} />)
    }
    return <Tab.Navigator initialRouteName="HomeScreen" screenOptions={({ route }) => {
        return {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: (d) => renderTabBarIcon(d, route)
        }
    }}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen} />
        <Tab.Screen name={"History"} component={History} />
        {/* <Tab.Screen name={"Register"} component={Register} />
        <Tab.Screen name={"Login"} component={Login} /> */}
    </Tab.Navigator>
}

export default UITab;