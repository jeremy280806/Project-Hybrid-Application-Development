import React from 'react';
import { createBottomTabScreen } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeFeed';
import ProfileScreen from '../screens/ProfileScreen';
import{View, Text} from 'react-native';
import { router } from 'expo-router';

const Tab = createBottomTabScreen();

// Layar kosong sementara
const PlaceholderScreen = () => <View className="flex-1 bg-white"/>;

export default function AppNavigator() {
    return(
        <Tab.Navigator
                screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: "#4F46E5",               
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarStyle:{paddingBottom: 5, height: 60},
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name === "Beranda") iconName = "home";
                    else if(route.name ==="Buat") iconName = "add-circle";
                    else if(route.name ==="Profil") iconName = "person";
                    else if(route.name ==="Eksplor") iconName = "search";
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
        >  
            <Tab.Screen name="Beranda" component={HomeFeed} />
            <Tab.Screen name="Buat" component={PlaceholderScreen} />
            <Tab.Screen name="Eksplor" component={PlaceholderScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
