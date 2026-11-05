import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AVATAR_URI =   'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_AhyfzJkpPIrM3z0iNQsEctynkrG4164Z5prsspWlaQa9p4NI5oWQcaURkV9lTF59gT-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_';
const SPECIALIST_1 = 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=256&auto=format&fit=crop';
const SPECIALIST_2 = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=256&auto=format&fit=crop';

const FILTERS = [
  { id: 'near', label: 'Terdekat', icon: 'near-me', color: '#3525cd', isActive: true },
  { id: 'rating', label: 'Rating 4.8+', icon: 'star', color: '#f59e0b', isActive: false },
  { id: 'promo', label: 'Promo Diskon', icon: 'local-offer', color: '#006e4b', isActive: false },
  { id: 'remote', label: 'Remote', icon: 'laptop-mac', color: '#131b2e', isActive: false },
  { id: 'instant', label: 'Instant Booking', icon: 'bolt', color: '#00687a', isActive: false },
];

const CATEGORIES = [
  { id: 1, name: 'Desain & Kreatif', count: '450+', icon: 'palette', bg: '#e2dfff', text: '#3525cd' },
  { id: 2, name: 'Tukang & Servis', count: '320+', icon: 'home-repair-service', bg: '#dae2fd', text: '#00687a' },
  { id: 3, name: 'IT & Gadget', count: '280+', icon: 'devices', bg: '#acedff', text: '#006172' },
  { id: 4, name: 'Kursus Privat', count: '190+', icon: 'school', bg: '#6ffbbe', text: '#005338' },
  { id: 5, name: 'Foto & Video', count: '150+', icon: 'photo-camera', bg: '#e2e7ff', text: '#4f46e5' },
  { id: 6, name: 'Bersih & Laundry', count: '210+', icon: 'cleaning-services', bg: '#eaedff', text: '#464555' },
];
