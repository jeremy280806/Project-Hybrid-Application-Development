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

const AVATAR_URI = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_AhyfzJkpPIrM3z0iNQsEctynkrG4164Z5prsspWlaQa9p4NI5oWQcaURkV9lTF59gT-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_';
const PORTFOLIO_1 = 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=256&auto=format&fit=crop';
const PORTFOLIO_2 = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=256&auto=format&fit=crop';

const PRIVACY_OPTIONS = [
  { icon: 'public', label: 'Publik (Semua Pengguna)' },
  { icon: 'group', label: 'Hanya Koneksi' },
  { icon: 'lock', label: 'Terbatas' },
];

export default function CreatePostScreen() {
  const router = useRouter();

  const [mode, setMode] = useState<'offer' | 'request'>('offer');
  const [privacyIdx, setPrivacyIdx] = useState(0);
  const [category, setCategory] = useState('Desain Grafis');
  const [location, setLocation] = useState<'jabodetabek' | 'remote'>('jabodetabek');
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [description, setDescription] = useState('');

  const cyclePrivacy = () => {
    setPrivacyIdx((prev) => (prev + 1) % PRIVACY_OPTIONS.length);
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/tabs/dashboard');
      }, 1500);
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]" edges={['top', 'left', 'right']}>
      <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff] z-50 border-b border-[#e2e7ff]">
        <View className="flex-row items-center gap-x-2">
          <TouchableOpacity
            className="w-11 h-11 items-center justify-center active:bg-[#e2e7ff] rounded-full"
            onPress={() => router.back()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
          </TouchableOpacity>
          <Text className="font-extrabold text-lg text-[#131b2e]">Posting Jasa</Text>
        </View>

        <View className="flex-row items-center gap-x-1">
          <TouchableOpacity className="w-11 h-11 items-center justify-center">
            <MaterialIcons name="share" size={24} color="#131b2e" />
          </TouchableOpacity>
          <View className="items-center justify-center">
            <Image
              source={{ uri: AVATAR_URI }}
              style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#dae2fd' }}
            />
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100, gap: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 pt-4">
            <View className="bg-[#eaedff] p-1 rounded-xl flex-row items-center justify-between shadow-sm">
              <TouchableOpacity
                className={`flex-1 py-2.5 rounded-lg flex-row items-center justify-center gap-x-2 transition-all ${
                  mode === 'offer' ? 'bg-white shadow-sm' : 'bg-transparent'
                }`}
                onPress={() => setMode('offer')}
              >
                <MaterialIcons
                  name="verified"
                  size={18}
                  color={mode === 'offer' ? '#3525cd' : '#777587'}
                />
                <Text
                  className={`text-sm font-bold ${
                    mode === 'offer' ? 'text-[#3525cd]' : 'text-[#777587]'
                  }`}
                >
                  Tawarkan Jasa
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 py-2.5 rounded-lg flex-row items-center justify-center gap-x-2 transition-all ${
                  mode === 'request' ? 'bg-white shadow-sm' : 'bg-transparent'
                }`}
                onPress={() => setMode('request')}
              >
                <MaterialIcons
                  name="handshake"
                  size={18}
                  color={mode === 'request' ? '#00687a' : '#777587'}
                />
                <Text
                  className={`text-sm font-bold ${
                    mode === 'request' ? 'text-[#00687a]' : 'text-[#777587]'
                  }`}
                >
                  Cari Bantuan
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-3">
              <View className="relative">
                <Image
                  source={{ uri: AVATAR_URI }}
                  style={{ width: 48, height: 48, borderRadius: 24 }}
                />
                <View className="absolute bottom-0 right-0 w-4 h-4 bg-[#4edea3] rounded-full items-center justify-center border-2 border-white">
                  <MaterialIcons name="check" size={10} color="#005236" />
                </View>
              </View>
              <View className="flex-col gap-y-0.5">
                <View className="flex-row items-center gap-x-1.5">
                  <Text className="text-base font-extrabold text-[#131b2e]">Reza Ramadhan</Text>
                  <View className="bg-[#e2dfff] px-1.5 py-0.5 rounded-full">
                    <Text className="text-[10px] font-bold text-[#3525cd]">PRO</Text>
                  </View>
                </View>
                <TouchableOpacity
                  className="flex-row items-center gap-x-1 bg-[#f2f3ff] px-2 py-1 rounded-full self-start active:bg-[#e2e7ff]"
                  onPress={cyclePrivacy}
                >
                  <MaterialIcons name={PRIVACY_OPTIONS[privacyIdx].icon as any} size={14} color="#464555" />
                  <Text className="text-[11px] font-bold text-[#464555]">
                    {PRIVACY_OPTIONS[privacyIdx].label}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-down" size={14} color="#464555" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-[#e2dfff] px-2.5 py-1.5 rounded-full flex-row items-center gap-x-1.5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#3525cd]" />
              <Text className="text-[11px] font-bold text-[#3525cd]">
                {mode === 'offer' ? 'Mode Penyedia' : 'Mode Pencari'}
              </Text>
            </View>
          </View>

          <View className="px-4">
            <View className="bg-white rounded-xl p-4 shadow-sm border border-[#f2f3ff] flex-col">
              <Text className="text-xs font-bold text-[#464555] mb-2">Rincian Postingan</Text>
              <TextInput
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={description}
                onChangeText={setDescription}
                className="w-full text-sm font-medium text-[#131b2e] bg-[#f2f3ff] rounded-xl p-3 min-h-[100px]"
                placeholder={
                  mode === 'offer'
                    ? 'Jelaskan keahlian dan layanan yang Anda tawarkan...'
                    : 'Jelaskan kendala atau kebutuhan proyek Anda...'
                }
                placeholderTextColor="#777587"
              />

              <View className="pt-3 flex-row flex-wrap gap-2">
                <View className="bg-[#eaedff] px-2 py-1 rounded-lg flex-row items-center gap-x-1">
                  <MaterialIcons name="bolt" size={14} color="#131b2e" />
                  <Text className="text-[11px] font-bold text-[#131b2e]">Respon Cepat</Text>
                </View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-lg flex-row items-center gap-x-1">
                  <MaterialIcons name="verified-user" size={14} color="#131b2e" />
                  <Text className="text-[11px] font-bold text-[#131b2e]">Jaminan Kualitas</Text>
                </View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-lg flex-row items-center gap-x-1">
                  <MaterialIcons name="schedule" size={14} color="#131b2e" />
                  <Text className="text-[11px] font-bold text-[#131b2e]">Sesuai Deadline</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="px-4">
            <View className="bg-white p-4 rounded-xl shadow-sm border border-[#f2f3ff] flex-col">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-x-1.5">
                  <MaterialIcons name="category" size={18} color="#3525cd" />
                  <Text className="text-sm font-extrabold text-[#131b2e]">Kategori Layanan</Text>
                </View>
                <Text className="text-xs font-bold text-[#3525cd]">Wajib</Text>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4 px-4">
                {[
                  { name: 'Desain Grafis', icon: 'brush' },
                  { name: 'IT & Web', icon: 'code' },
                  { name: 'Reparasi', icon: 'home-repair-service' },
                  { name: 'Fotografi', icon: 'photo-camera' },
                ].map((item) => (
                  <TouchableOpacity
                    key={item.name}
                    onPress={() => setCategory(item.name)}
                    className={`px-3 py-2 mr-2 rounded-xl flex-row items-center gap-x-1.5 transition-all ${
                      category === item.name ? 'bg-[#3525cd] shadow-sm' : 'bg-[#eaedff]'
                    }`}
                  >
                    <MaterialIcons
                      name={item.icon as any}
                      size={16}
                      color={category === item.name ? '#ffffff' : '#131b2e'}
                    />
                    <Text
                      className={`text-xs font-bold ${
                        category === item.name ? 'text-white' : 'text-[#131b2e]'
                      }`}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>

          <View className="px-4">
            <View className="bg-white p-4 rounded-xl shadow-sm border border-[#f2f3ff] flex-col">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-x-1.5">
                  <MaterialIcons name="payments" size={18} color="#006e4b" />
                  <Text className="text-sm font-extrabold text-[#131b2e]">Estimasi Tarif</Text>
                </View>
                <Text className="text-[11px] font-bold text-[#777587]">Bisa Nego</Text>
              </View>

              <View className="flex-row gap-x-2">
                <View className="flex-[1.5] bg-[#f2f3ff] rounded-xl px-3 py-3 flex-row items-center gap-x-2">
                  <Text className="text-base font-extrabold text-[#3525cd]">Rp</Text>
                  <TextInput
                    className="flex-1 text-base font-bold text-[#131b2e] p-0"
                    placeholder="150.000"
                    placeholderTextColor="#777587"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex-1 bg-[#f2f3ff] rounded-xl px-3 py-3 flex-row items-center justify-between">
                  <Text className="text-xs font-bold text-[#131b2e]">per proyek</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={18} color="#131b2e" />
                </View>
              </View>

              <View className="mt-3 flex-row items-center gap-x-1.5">
                <MaterialIcons name="info" size={14} color="#00687a" />
                <Text className="text-[11px] font-medium text-[#464555]">
                  Harga transparan meningkatkan peluang tawaran hingga 65%
                </Text>
              </View>
            </View>
          </View>

          <View className="px-4">
            <View className="bg-white p-4 rounded-xl shadow-sm border border-[#f2f3ff] flex-col">
              <View className="flex-row items-center gap-x-1.5 mb-3">
                <MaterialIcons name="location-on" size={18} color="#00687a" />
                <Text className="text-sm font-extrabold text-[#131b2e]">Lokasi Pelaksanaan</Text>
              </View>

              <View className="flex-row gap-x-3">
                <TouchableOpacity
                  onPress={() => setLocation('jabodetabek')}
                  className={`flex-1 p-3 rounded-xl border ${
                    location === 'jabodetabek' ? 'bg-[#eaedff] border-[#3525cd]' : 'bg-[#f2f3ff] border-transparent'
                  }`}
                >
                  <View className="flex-row items-center justify-between mb-2">
                    <MaterialIcons name="near-me" size={20} color="#00687a" />
                    <MaterialIcons
                      name={location === 'jabodetabek' ? 'radio-button-checked' : 'radio-button-unchecked'}
                      size={20}
                      color={location === 'jabodetabek' ? '#3525cd' : '#777587'}
                    />
                  </View>
                  <Text className="text-sm font-extrabold text-[#131b2e]">Jabodetabek</Text>
                  <Text className="text-[10px] font-medium text-[#464555] mt-0.5">Layanan On-site</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setLocation('remote')}
                  className={`flex-1 p-3 rounded-xl border ${
                    location === 'remote' ? 'bg-[#eaedff] border-[#3525cd]' : 'bg-[#f2f3ff] border-transparent'
                  }`}
                >
                  <View className="flex-row items-center justify-between mb-2">
                    <MaterialIcons name="public" size={20} color="#3525cd" />
                    <MaterialIcons
                      name={location === 'remote' ? 'radio-button-checked' : 'radio-button-unchecked'}
                      size={20}
                      color={location === 'remote' ? '#3525cd' : '#777587'}
                    />
                  </View>
                  <Text className="text-sm font-extrabold text-[#131b2e]">Bisa Remote</Text>
                  <Text className="text-[10px] font-medium text-[#464555] mt-0.5">Online / Luar Kota</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="px-4">
            <View className="bg-white p-4 rounded-xl shadow-sm border border-[#f2f3ff] flex-col">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-x-1.5">
                  <MaterialIcons name="perm-media" size={18} color="#3525cd" />
                  <Text className="text-sm font-extrabold text-[#131b2e]">Media &amp; Portofolio</Text>
                </View>
                <Text className="text-xs font-bold text-[#777587]">Maks. 5 File</Text>
              </View>

              <View className="bg-[#f2f3ff] rounded-xl p-4 flex-col items-center justify-center text-center">
                <View className="w-14 h-14 rounded-full bg-[#e2dfff] flex items-center justify-center mb-2 shadow-sm">
                  <MaterialIcons name="cloud-upload" size={28} color="#3525cd" />
                </View>
                <Text className="text-sm font-bold text-[#131b2e]">Pilih Berkas Upload</Text>
                <Text className="text-[10px] text-[#464555] mt-0.5 mb-3">
                  Format didukung: PNG, JPG, PDF (hingga 10MB)
                </Text>

                <View className="w-full flex-row gap-x-2">
                  <TouchableOpacity className="flex-1 bg-white p-2.5 rounded-xl flex-row items-center justify-center gap-x-1.5 shadow-sm active:scale-95">
                    <MaterialIcons name="add-photo-alternate" size={18} color="#3525cd" />
                    <Text className="text-xs font-bold text-[#131b2e]">Hasil Kerja</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-white p-2.5 rounded-xl flex-row items-center justify-center gap-x-1.5 shadow-sm active:scale-95">
                    <MaterialIcons name="workspace-premium" size={18} color="#005338" />
                    <Text className="text-xs font-bold text-[#131b2e]">Sertifikat</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="pt-4">
                <Text className="text-[11px] font-bold text-[#777587] mb-2">Contoh Portofolio Terlampir:</Text>
                <View className="flex-row gap-x-2">
                  <View className="relative w-[30%] aspect-square rounded-xl overflow-hidden bg-[#e2e7ff] shadow-sm">
                    <Image source={{ uri: PORTFOLIO_1 }} style={{ width: '100%', height: '100%' }} />
                    <TouchableOpacity className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 items-center justify-center">
                      <MaterialIcons name="close" size={14} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                  <View className="relative w-[30%] aspect-square rounded-xl overflow-hidden bg-[#e2e7ff] shadow-sm">
                    <Image source={{ uri: PORTFOLIO_2 }} style={{ width: '100%', height: '100%' }} />
                    <TouchableOpacity className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 items-center justify-center">
                      <MaterialIcons name="close" size={14} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity className="w-[30%] aspect-square rounded-xl bg-[#eaedff] flex-col items-center justify-center active:bg-[#e2dfff]">
                    <MaterialIcons name="add" size={24} color="#3525cd" />
                    <Text className="text-[10px] font-bold text-[#3525cd] mt-0.5">Tambah</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View className="absolute bottom-0 w-full z-40 bg-white/95 px-4 py-4 shadow-lg border-t border-[#f2f3ff]">
        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity
            className="w-1/3 py-3.5 rounded-xl bg-[#eaedff] items-center justify-center active:scale-95"
            onPress={() => router.back()}
          >
            <Text className="text-sm font-extrabold text-[#131b2e]">Batal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3.5 rounded-xl flex-row items-center justify-center gap-x-2 shadow-sm active:scale-98 ${
              isSuccess ? 'bg-[#006e4b]' : 'bg-[#3525cd]'
            }`}
            onPress={handlePublish}
            disabled={isPublishing || isSuccess}
          >
            {isPublishing ? (
              <>
                <MaterialIcons name="autorenew" size={20} color="#ffffff" />
                <Text className="text-sm font-extrabold text-white">Memproses...</Text>
              </>
            ) : isSuccess ? (
              <>
                <MaterialIcons name="check-circle" size={20} color="#ffffff" />
                <Text className="text-sm font-extrabold text-white">Berhasil Terbit!</Text>
              </>
            ) : (
              <>
                <MaterialIcons name="rocket-launch" size={20} color="#6ffbbe" />
                <Text className="text-sm font-extrabold text-white">Publikasikan Postingan</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}