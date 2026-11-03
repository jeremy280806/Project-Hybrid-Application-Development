import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#3525cd',
        tabBarInactiveTintColor: '#9090B0',
        tabBarStyle: {
          backgroundColor: '#faf8ff',
          borderTopColor: '#dae2fd',
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 2,
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
            <View className="w-12 h-12 rounded-full bg-[#3525cd] items-center justify-center -mt-6 shadow-lg">
              <MaterialIcons name="add" size={28} color="#ffffff" />
            </View>
          ),
        }}
      />
      
      <Tabs.Screen
        name="feed"
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
    </Tabs>
  );
}