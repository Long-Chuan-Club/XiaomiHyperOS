import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar as TheStatusBar,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="flex-1 items-center  bg-white">
        <View className="flex-row mt-80">
          <Text className="text-4xl font-bold leading-16">Xiaomi </Text>
          <Text className="text-4xl font-bold leading-16">Hyper</Text>
          <Text className="text-4xl font-bold leading-16 text-blue-800">
            OS
          </Text>
        </View>
        <View className="flex-row mt-4">
          <Text className="text-2xl font-600 tracking-[4]">小米澎湃OS</Text>
        </View>
        <View className="bg-gray-100 rounded-full mt-48">
          <Text className="text-neutral-600 text-3xl px-5 py-4">→</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
