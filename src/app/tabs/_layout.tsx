import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3525cd',
        tabBarInactiveTintColor: '#9090B0',

        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),

        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,

          backgroundColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          height: 75,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Eksplor',
          tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="create-post"
        options={{
          title: '',
          tabBarIcon: () => (
            <View className="w-14 h-14 rounded-full bg-[#3525cd] items-center justify-center -mt-7 shadow-md border-[4px] border-white/50">
              <MaterialIcons name="add" size={28} color="#ffffff" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="message" 
        options={{
          title: 'Pesan',
          tabBarIcon: ({ color }) => <MaterialIcons name="chat-bubble-outline" size={24} color={color} />,
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
        name="order-detail"
        options={{
          title: 'Detail Pesanan',
          href: null,
          tabBarStyle: { display: 'none' }, 
        }}
      />
    </Tabs>
  );
}