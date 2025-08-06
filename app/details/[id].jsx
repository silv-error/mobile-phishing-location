import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import useData from "@/components/data";
import { act } from "react";

export default function DetailsScreen({ onBack }) {
  const { id } = useLocalSearchParams();

  const activity = useData(id);
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity onPress={() => router.back()} className="p-4">
        <Ionicons name="arrow-back" size={24} color="#4B5563" />
      </TouchableOpacity>
      <ScrollView className="p-6">
        {activity && <Image source={activity.image} className="h-64 w-full rounded-2xl mb-6" />}
        {!activity && <Image source={require("../../assets/images/bg.jpg")} className="h-64 w-full rounded-2xl mb-6" />}
        <Text className="text-3xl font-bold mb-3">{activity?.title || "The Whispering Falls Oasis"}</Text>
        {activity?.no && (
          <View className="flex-row mb-2">
            <Text className="font-bold">Contact No:</Text>
            <Text className="ml-1">{activity?.no}</Text>
          </View>
        )}
        <Text className="text-gray-600 mb-4">
          {activity?.description || "A serene natural escape, just 4.5km away."}
        </Text>
        <View className="flex-row items-center text-gray-700 mb-4">
          <Ionicons name="star" size={20} color="#FBBF24" />
          <Text className="ml-1">4.9 (750 reviews)</Text>
          <Text className="mx-2">•</Text>
          <Ionicons name="location-outline" size={20} color="#6B7280" />
          <Text className="ml-1">4.5 km away</Text>
          <Text className="mx-2">•</Text>
        </View>
        <View className="flex-row flex-wrap gap-2 mb-6">
          {["Nature", "Relaxing", "Hidden Gem", "Photography"].map((tag, i) => (
            <Text key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {tag}
            </Text>
          ))}
        </View>
        <Text className="text-gray-700 leading-relaxed mb-6">
          Discover the breathtaking beauty of the Whispering Falls Oasis...
        </Text>
        <TouchableOpacity className="bg-orange-500 py-4 rounded-xl">
          <Text className="text-lg font-semibold text-white text-center">Get Directions</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
