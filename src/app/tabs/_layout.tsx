import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f2f3ff',
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#3525cd',
        tabBarInactiveTintColor: '#777587',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Manrope-Bold', 
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="beranda"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="eksplor"
        options={{
          title: 'Eksplor',
          tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="add" 
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          href: '/(tabs)/create-post' 
        }}
      />

      <Tabs.Screen
        name="pesan"
        options={{
          title: 'Pesan',
          tabBarIcon: ({ color }) => <MaterialIcons name="chat-bubble" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="create-post"
        options={{
          href: null, 
        }}
      />
    </Tabs>
  );
}