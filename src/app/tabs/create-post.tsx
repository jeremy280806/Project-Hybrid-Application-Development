import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AVATAR_URI = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop';
const PORTFOLIO_1 = 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=256&auto=format&fit=crop';
const PORTFOLIO_2 = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=256&auto=format&fit=crop';

const PRIVACY_OPTIONS = [
  { icon: 'public', label: 'Publik (Semua Pengguna)' },
  { icon: 'group', label: 'Hanya Koneksi' },
  { icon: 'lock', label: 'Terbatas' },
];