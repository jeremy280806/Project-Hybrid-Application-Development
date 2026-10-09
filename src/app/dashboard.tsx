import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="h-16 px-4 flex-row items-center justify-between bg-surface shadow-sm border-b border-gray-200">
        <View className="flex-col">
          <Text className="font-bold text-lg text-primary tracking-tight leading-tight">ServiConnect</Text>
          <Text className="font-medium text-xs text-on-surface-variant">Beranda</Text>
        </View>
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#131b2e" />
          </TouchableOpacity>
          <TouchableOpacity className="relative">
            <MaterialIcons name="notifications" size={24} color="#131b2e" />
            <View className="absolute top-0 right-0 w-2 h-2 rounded-full bg-error border border-surface" />
          </TouchableOpacity>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_AhyfzJkpPIrM3z0iNQsEctynkrG4164Z5prsspWlaQa9p4NI5oWQcaURkV9lTF59gT-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_' }} 
            className="w-8 h-8 rounded-full" 
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center space-x-3">
            <View className="relative">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpb7zD1vW9I-BgTVWig8lvdHj5xMOeNRl5F2mSLGy93cosNJy0J0yGbrpQB_-JvJQrOHfwrRRrGjsM74yatS8jEAJ2bO3cJQizXPkj5RI1Dsd-mVknIV7Q4oGIiH06-odTH3JVj6NVf3WPk23Xzwe9dDttSzPKjpw9s1g43hqt08MFWPLjwTnkDm27cWpvkerB4OXL3DttKkqv2feX78mNXvDvjw0luktxIn9CyR_M58cYF2vR2P4I' }} 
                className="w-12 h-12 rounded-full" 
              />
              <View className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tertiary-fixed rounded-full border-2 border-surface" />
            </View>
            <View>
              <View className="flex-row items-center space-x-1">
                <Text className="font-bold text-base text-on-surface">Halo, Reza Ramadhan</Text>
                <MaterialIcons name="verified" size={14} color="#006e4b" />
              </View>
              <View className="flex-row items-center space-x-1">
                <View className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                <Text className="text-xs font-semibold text-tertiary">Mode Menerima Pesanan</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-xl bg-surface-container items-center justify-center">
            <MaterialIcons name="tune" size={20} color="#464555" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-start space-x-3 p-4 bg-primary-fixed rounded-xl mb-4">
          <View className="w-9 h-9 rounded-lg bg-primary-container items-center justify-center">
            <MaterialIcons name="tips-and-updates" size={20} color="#ffffff" />
          </View>
          <View className="flex-1">
            <View className="flex-row justify-between">
              <Text className="text-xs font-bold text-primary uppercase">Tips Mitra Cerdas</Text>
              <Text className="text-xs text-on-surface-variant">Baru</Text>
            </View>
            <Text className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              2 penawaran jasa Anda sedang ditinjau calon klien. Respon cepat dalam 30 menit meningkatkan peluang closing.
            </Text>
          </View>
        </View>

        <View className="p-4 bg-primary rounded-xl mb-4 shadow-lg overflow-hidden">
          <View className="flex-row justify-between mb-4">
            <View className="flex-row items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <MaterialIcons name="lock" size={14} color="#6ffbbe" />
              <Text className="text-xs text-white">BCA • Rek 829xxxx902</Text>
            </View>
            <View className="flex-row items-center space-x-1 bg-tertiary-container/80 px-2 py-1 rounded-full">
              <MaterialIcons name="trending-up" size={14} color="#6ffbbe" />
              <Text className="text-xs text-white font-bold">+18.4%</Text>
            </View>
          </View>

          <Text className="text-xs text-on-primary-container font-medium">Saldo Siap Ditarik</Text>
          <View className="flex-row items-baseline mb-4">
            <Text className="text-white text-lg mr-1">Rp</Text>
            <Text className="text-white text-3xl font-bold tracking-tight">4.850.000</Text>
          </View>

          <View className="flex-row justify-between items-end border-t border-white/20 pt-3">
            <View>
              <Text className="text-xs text-on-primary-container">Total Pendapatan Bulan Ini</Text>
              <Text className="text-white font-bold">Rp 12.350.000</Text>
            </View>
            <TouchableOpacity className="flex-row items-center bg-white px-3 py-2 rounded-lg">
              <MaterialIcons name="payments" size={18} color="#3525cd" />
              <Text className="text-primary font-bold ml-1">Tarik Saldo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="items-center bg-white p-3 rounded-xl shadow-sm w-[23%]">
            <View className="w-10 h-10 rounded-xl bg-primary/10 items-center justify-center mb-1">
              <MaterialIcons name="account-balance-wallet" size={20} color="#3525cd" />
            </View>
            <Text className="text-[10px] text-center font-semibold">Tarik Saldo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center bg-white p-3 rounded-xl shadow-sm w-[23%]">
            <View className="w-10 h-10 rounded-xl bg-secondary/10 items-center justify-center mb-1">
              <MaterialIcons name="add-circle" size={20} color="#00687a" />
            </View>
            <Text className="text-[10px] text-center font-semibold">Tambah Jasa</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center bg-white p-3 rounded-xl shadow-sm w-[23%]">
            <View className="w-10 h-10 rounded-xl bg-surface-container-highest items-center justify-center mb-1">
              <MaterialIcons name="qr-code-scanner" size={20} color="#131b2e" />
            </View>
            <Text className="text-[10px] text-center font-semibold">Scan Bayar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center bg-white p-3 rounded-xl shadow-sm w-[23%]">
            <View className="w-10 h-10 rounded-xl bg-tertiary-container/10 items-center justify-center mb-1">
              <MaterialIcons name="receipt-long" size={20} color="#006e4b" />
            </View>
            <Text className="text-[10px] text-center font-semibold">Laporan</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between mb-6">
          <View className="w-[48%] bg-white p-3 rounded-xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Pesanan Aktif</Text>
              <View className="bg-primary-fixed p-1 rounded-lg"><MaterialIcons name="pending-actions" size={16} color="#3525cd" /></View>
            </View>
            <Text className="text-xl font-bold">4 <Text className="text-sm font-normal text-gray-500">Proyek</Text></Text>
          </View>
          
          <View className="w-[48%] bg-white p-3 rounded-xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Selesai (Bln Ini)</Text>
              <View className="bg-tertiary-fixed p-1 rounded-lg"><MaterialIcons name="check-circle" size={16} color="#005338" /></View>
            </View>
            <Text className="text-xl font-bold">28 <Text className="text-sm font-normal text-gray-500">Pesanan</Text></Text>
          </View>
        </View>

        {/* ACTIVE ORDERS SECTION */}
        <View className="mb-2">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center space-x-2">
              <Text className="text-base font-bold">Pesanan Pelanggan</Text>
              <View className="bg-primary px-2 rounded-full"><Text className="text-white text-[10px] font-bold">4 Aktif</Text></View>
            </View>
            <TouchableOpacity><Text className="text-primary text-xs font-semibold">Lihat Semua</Text></TouchableOpacity>
          </View>
          
          {/* Order Card */}
          <View className="bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-100">
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center space-x-2">
                <Text className="text-xs font-bold text-gray-500">#SC-8921</Text>
                <View className="bg-primary-fixed px-2 py-0.5 rounded-full"><Text className="text-primary text-[10px] font-bold">Sedang Dikerjakan</Text></View>
              </View>
              <View className="bg-error-container px-2 py-0.5 rounded-full flex-row items-center">
                <MaterialIcons name="timer" size={12} color="#93000a" />
                <Text className="text-[#93000a] text-[10px] font-bold ml-1">1 Hari 6 Jam</Text>
              </View>
            </View>

            <View className="flex-row mb-3">
              <Image source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmw1vniv4-kF0cIFF7cmsc355hyEaaDmRF3df7SiFVzIt4gcXPMUGeJ0T5ZxUpXM_LeEv1zDQIfTpuxzdZBLvwlimhueASiWF3fiPmlbjztP6WB7fCg1crP_EHAKQn9480TWigNXlz8VMUwJH_o0X_Ro5p4bnjxlzgser8YC_0CI8A6AQh37Y-I9G4MMRNqYUm9xrtZ7W2xR1NpuaBg5xhURtPFUI9cc-NJOuVVICg_LOFTQkxUS7H'}} className="w-10 h-10 rounded-full mr-3" />
              <View className="flex-1">
                <View className="flex-row items-center space-x-1">
                  <Text className="font-bold text-sm">Budi Santoso</Text>
                  <MaterialIcons name="verified" size={14} color="#005338" />
                </View>
                <Text className="text-xs text-gray-500">PT Inovasi Digital Nusantara</Text>
                <Text className="text-sm font-bold text-primary mt-1">Desain UI/UX Mobile App</Text>
              </View>
            </View>

            <View className="flex-row justify-between bg-surface-container-low p-2 rounded-lg mb-3">
               <View>
                 <Text className="text-[10px] text-gray-500">Status Escrow</Text>
                 <Text className="text-xs font-bold text-tertiary">Dana Diamankan</Text>
               </View>
               <View className="items-end">
                 <Text className="text-[10px] text-gray-500">Biaya Proyek</Text>
                 <Text className="text-sm font-bold">Rp 1.500.000</Text>
               </View>
            </View>

            <View className="flex-row space-x-2">
              <TouchableOpacity className="flex-1 flex-row justify-center items-center bg-surface-container py-2 rounded-lg">
                <MaterialIcons name="chat" size={16} color="#3525cd" />
                <Text className="text-xs font-bold ml-1">Chat Klien</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row justify-center items-center bg-primary py-2 rounded-lg">
                <MaterialIcons name="upload-file" size={16} color="#ffffff" />
                <Text className="text-xs font-bold text-white ml-1">Kirim Progres</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* BOTTOM NAVIGATION BAR */}
      <View className="absolute bottom-0 w-full h-16 flex-row bg-surface border-t border-gray-200 justify-around items-center px-2 pb-2">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="home" size={24} color="#3525cd" />
          <Text className="text-[10px] text-primary font-bold mt-0.5">Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="explore" size={24} color="#777587" />
          <Text className="text-[10px] text-outline mt-0.5">Eksplor</Text>
        </TouchableOpacity>
        
        {/* Floating Action Button Concept */}
        <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-primary-container -mt-6 shadow-md border-4 border-surface">
          <MaterialIcons name="add" size={28} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MaterialIcons name="chat-bubble" size={24} color="#777587" />
          <Text className="text-[10px] text-outline mt-0.5">Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="account-circle" size={24} color="#777587" />
          <Text className="text-[10px] text-outline mt-0.5">Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}