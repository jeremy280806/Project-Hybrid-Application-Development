import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderDetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]" edges={['top', 'left', 'right']}>
      <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff] z-50 shadow-sm border-b border-[#e2e7ff]">
        <View className="flex-row items-center gap-x-3 flex-1">
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full active:bg-[#e2e7ff]"
            onPress={() => router.back()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
          </TouchableOpacity>
          <View className="flex-col">
            <Text className="font-extrabold text-base text-[#131b2e]">Order Details</Text>
            <Text className="text-[10px] text-[#464555] uppercase tracking-wider font-bold">
              ServiConnect Order
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-x-2">
          <View className="px-2 py-0.5 rounded-full bg-[#acedff]">
            <Text className="text-[11px] font-bold text-[#004e5c]">Diproses</Text>
          </View>
          <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-full active:bg-[#e2e7ff]">
            <MaterialIcons name="help-outline" size={20} color="#464555" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 100, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >

        <View className="flex-col gap-y-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-2 px-3 py-1.5 rounded-full bg-[#e2e7ff]">
              <View className="w-2.5 h-2.5 rounded-full bg-[#3525cd]" />
              <Text className="text-xs font-bold text-[#3525cd]">Sedang Dikerjakan</Text>
            </View>
            <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-full bg-[#ffdad6]">
              <MaterialIcons name="local-fire-department" size={14} color="#93000a" />
              <Text className="text-[11px] font-bold text-[#93000a]">Sisa 1 Hari 6 Jam</Text>
            </View>
          </View>

          <View className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e7ff] flex-col gap-y-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-[11px] text-[#464555] font-medium">#SC-8921 • Dimulai 24 Okt 2024</Text>
              <View className="bg-[#eaedff] px-2 py-0.5 rounded">
                <Text className="text-[10px] font-bold text-[#3525cd]">Paket Pro Max</Text>
              </View>
            </View>
            <Text className="text-lg font-extrabold text-[#131b2e] leading-tight">
              Desain UI/UX Mobile App (Figma Prototype &amp; Design System)
            </Text>
            <View className="flex-row items-center gap-x-2">
              <View className="flex-row items-center gap-x-1">
                <MaterialIcons name="category" size={16} color="#3525cd" />
                <Text className="text-xs text-[#464555]">Desain Antarmuka</Text>
              </View>
              <Text className="text-xs text-[#464555]">•</Text>
              <View className="flex-row items-center gap-x-1">
                <MaterialIcons name="replay" size={16} color="#005338" />
                <Text className="text-xs text-[#464555]">Revisi Maks. 3x (Sisa 2x)</Text>
              </View>
            </View>
          </View>

          <View className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e7ff] flex-col gap-y-4">
            <View className="flex-row items-start justify-between">
              <View className="flex-row items-center gap-x-3 flex-1">
                <View className="relative">
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA9eCjyT5zZN58Jq3bWnxYeqzt50C4CQM_YDDP4Rqr2Mq-tpaa8nUtlGjDXVh7C5eTpTLQUNBGvm3UiLHQao4LgnF5TopXPWeB0g3SXJPD4B71abfDjzIVSB4vm51xjw4GPgYRtC7ZvfJF9OFviuiuCeIGdkL4yEZIchxcjc6fMjfFMlad0BXb6mxCd1FYe_DGjiaKcmTbiABLWBVp1H_XyT7koQHOzTO_ptegVRX6_BNS0Ef7YzXq  ' }}
                    style={{ width: 48, height: 48, borderRadius: 24 }}
                  />
                  <View className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#005338] items-center justify-center border-2 border-white">
                    <MaterialIcons name="verified" size={12} color="#ffffff" />
                  </View>
                </View>
                <View className="flex-col">
                  <View className="flex-row items-center gap-x-1.5">
                    <Text className="text-sm font-extrabold text-[#131b2e]">Budi Santoso</Text>
                    <View className="bg-[#6ffbbe] px-1.5 py-0.5 rounded">
                      <Text className="text-[9px] font-bold text-[#002113]">Klien Terverifikasi</Text>
                    </View>
                  </View>
                  <Text className="text-xs text-[#464555]">PT Inovasi Digital Nusantara</Text>
                  <View className="flex-row items-center gap-x-1 mt-0.5">
                    <MaterialIcons name="star" size={14} color="#f59e0b" />
                    <Text className="text-xs font-bold text-[#131b2e]">5.0</Text>
                    <Text className="text-[11px] text-[#464555]">(14 proyek selesai)</Text>
                  </View>
                </View>
              </View>
              <View className="flex-row gap-x-1.5">
                <TouchableOpacity className="w-10 h-10 rounded-lg bg-[#e2e7ff] items-center justify-center">
                  <MaterialIcons name="phone" size={20} color="#3525cd" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-lg bg-[#3525cd] items-center justify-center">
                  <MaterialIcons name="chat" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-gradient-to-r from-[#e2e7ff] to-[#eaedff] p-3 rounded-lg flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-2">
                <View className="w-8 h-8 rounded-md bg-[#3525cd] items-center justify-center">
                  <MaterialIcons name="timer" size={18} color="#ffffff" />
                </View>
                <View className="flex-col">
                  <Text className="text-[10px] text-[#464555]">Batas Draf Final:</Text>
                  <Text className="text-xs font-extrabold text-[#131b2e]">28 Okt, 18:00 WIB</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-x-1">
                <View className="bg-white px-2 py-1 rounded shadow-sm items-center">
                  <Text className="text-sm font-bold text-[#3525cd]">01</Text>
                  <Text className="text-[8px] text-[#464555] uppercase">Hari</Text>
                </View>
                <Text className="font-bold text-[#464555]">:</Text>
                <View className="bg-white px-2 py-1 rounded shadow-sm items-center">
                  <Text className="text-sm font-bold text-[#3525cd]">06</Text>
                  <Text className="text-[8px] text-[#464555] uppercase">Jam</Text>
                </View>
                <Text className="font-bold text-[#464555]">:</Text>
                <View className="bg-white px-2 py-1 rounded shadow-sm items-center">
                  <Text className="text-sm font-bold text-[#3525cd]">16</Text>
                  <Text className="text-[8px] text-[#464555] uppercase">Mnt</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e7ff] flex-col gap-y-4">
          <View className="flex-row justify-between items-start">
            <View className="flex-row items-center gap-x-2">
              <View className="w-10 h-10 rounded-lg bg-[#6ffbbe] items-center justify-center">
                <MaterialIcons name="shield" size={24} color="#005338" />
              </View>
              <View className="flex-col">
                <View className="flex-row items-center gap-x-1.5">
                  <Text className="text-sm font-extrabold text-[#131b2e]">Rekening Bersama</Text>
                  <View className="bg-[#6ffbbe] px-1.5 py-0.5 rounded-full">
                    <Text className="text-[9px] font-bold text-[#002113]">100% Aman</Text>
                  </View>
                </View>
                <Text className="text-[10px] text-[#464555]">Dana disetor penuh di muka</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-[10px] text-[#464555]">Total Nilai</Text>
              <Text className="text-lg font-extrabold text-[#3525cd]">Rp 1.500.000</Text>
            </View>
          </View>
          
          <View className="flex-col gap-y-1">
            <View className="flex-row justify-between">
              <Text className="text-[11px] text-[#464555]">Status Pencairan Dana:</Text>
              <Text className="text-[11px] font-bold text-[#005338]">30% Dicairkan (Rp 450.000)</Text>
            </View>
            <View className="w-full h-3 bg-[#eaedff] rounded-full flex-row overflow-hidden">
              <View style={{ width: '30%' }} className="h-full bg-[#005338]" />
              <View style={{ width: '50%' }} className="h-full bg-[#3525cd]" />
              <View style={{ width: '20%' }} className="h-full bg-[#c7c4d8]" />
            </View>
          </View>
        </View>

        <View className="flex-col gap-y-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-2">
              <MaterialIcons name="flag" size={20} color="#3525cd" />
              <Text className="text-base font-extrabold text-[#131b2e]">Pelacak Milestone</Text>
            </View>
            <Text className="text-xs text-[#464555] font-medium">1 dari 3 Selesai</Text>
          </View>

          <View className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-l-[#005338] border-[#e2e7ff] flex-col gap-y-2">
            <View className="flex-row justify-between items-start">
              <View className="flex-row items-center gap-x-2">
                <MaterialIcons name="check-circle" size={24} color="#005338" />
                <View className="flex-col">
                  <Text className="text-[10px] font-bold text-[#005338] uppercase">Milestone 1 • Selesai</Text>
                  <Text className="text-sm font-bold text-[#131b2e]">Wireframing &amp; User Flow</Text>
                </View>
              </View>
              <Text className="text-sm font-bold text-[#005338]">Rp 450.000</Text>
            </View>
          </View>


          <View className="bg-white p-4 rounded-xl shadow-md border-l-4 border-l-[#3525cd] border-[#e2e7ff] flex-col gap-y-3">
            <View className="flex-row justify-between items-start">
              <View className="flex-row items-center gap-x-2">
                <MaterialIcons name="refresh" size={24} color="#3525cd" />
                <View className="flex-col">
                  <Text className="text-[10px] font-bold text-[#3525cd] uppercase">Milestone 2 • Berjalan</Text>
                  <Text className="text-sm font-bold text-[#131b2e]">Desain High-Fidelity &amp; DS</Text>
                </View>
              </View>
              <Text className="text-sm font-bold text-[#3525cd]">Rp 750.000</Text>
            </View>
            <Text className="text-xs text-[#464555]">
              Penyelesaian 12 layar Hi-Fi utama, sistem token warna &amp; tipografi Outfit.
            </Text>
            
            <View className="bg-[#f2f3ff] p-2 rounded-lg flex-row items-center justify-between">
              <Text className="text-xs text-[#131b2e]">Progres: 9 dari 12 Layar</Text>
              <View className="bg-[#e2dfff] px-2 py-0.5 rounded">
                <Text className="text-[10px] font-bold text-[#0f0069]">75%</Text>
              </View>
            </View>
            <TouchableOpacity className="w-full py-2.5 rounded-lg bg-[#e2e7ff] flex-row items-center justify-center gap-x-2">
              <MaterialIcons name="add-photo-alternate" size={18} color="#3525cd" />
              <Text className="text-xs font-bold text-[#3525cd]">Unggah Hasil Progres / Draf v2</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e7ff] flex-col gap-y-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-2">
              <MaterialIcons name="folder-open" size={20} color="#3525cd" />
              <Text className="text-sm font-extrabold text-[#131b2e]">Berkas &amp; Deliverables</Text>
            </View>
            <Text className="text-xs font-semibold text-[#3525cd]">2 Berkas</Text>
          </View>
          
          <View className="bg-[#f2f3ff] p-2 rounded-lg flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-3">
              <MaterialIcons name="draw" size={24} color="#9333ea" />
              <View className="flex-col">
                <Text className="text-xs font-bold text-[#131b2e]">serviconnect-prototype.fig</Text>
                <Text className="text-[10px] text-[#464555]">Tautan Figma Live</Text>
              </View>
            </View>
            <MaterialIcons name="open-in-new" size={20} color="#3525cd" />
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 w-full bg-white px-4 py-3 shadow-lg border-t border-[#e2e7ff] flex-row items-center gap-x-3">
        <TouchableOpacity 
          className="flex-1 py-3.5 rounded-xl bg-[#e2e7ff] flex-row items-center justify-center gap-x-2"
          onPress={() => router.push('/tabs/message')}
        >
          <MaterialIcons name="chat" size={20} color="#3525cd" />
          <Text className="text-sm font-bold text-[#3525cd]">Chat Klien</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-[1.5] py-3.5 rounded-xl bg-[#3525cd] flex-row items-center justify-center gap-x-2">
          <MaterialIcons name="upload-file" size={20} color="#ffffff" />
          <Text className="text-sm font-bold text-white">Kirim Hasil / Progres</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}