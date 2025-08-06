import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import useData from "../../components/data.js";

export default function MainAppScreen({ onSelectActivity }) {
  const router = useRouter();

  const tagColors = [
    "bg-red-200 text-red-800",
    "bg-green-200 text-green-800",
    "bg-blue-200 text-blue-800",
    "bg-yellow-200 text-yellow-800",
    "bg-purple-200 text-purple-800",
    "bg-pink-200 text-pink-800",
    "bg-orange-200 text-orange-800",
    "bg-teal-200 text-teal-800",
  ];

  const getRandomTagColor = () => {
    return tagColors[Math.floor(Math.random() * tagColors.length)];
  };

  const activities = useData();
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-6">
        <View className="py-4 px-6 md:px-12">
          <View className="container mx-auto flex items-center justify-between mb-4">
            <Text className="text-3xl font-bold text-gray-900">Your Discovery!</Text>
          </View>
          <View className="container mx-auto text-center md:text-left">
            <Text className="text-lg md:text-xl text-gray-600">
              Here's a special activity we think you'll love today!
            </Text>
          </View>
        </View>

        <View className="activity-card bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl shadow-xl overflow-hidden transform transition-transform  duration-300 animate-popIn delay-100 mb-8 cursor-pointer">
          <View className="relative h-[500px]">
            <Image
              source={require("../../assets/images/bg.jpg")}
              alt="Hidden Waterfall Oasis"
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <View className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
              <Text>✨ Your Special Pick!</Text>
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12 text-white flex flex-col justify-end">
              <View className="flex flex-wrap gap-2 mb-3">
                <Text className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">Nature</Text>
                <Text className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Relaxing</Text>
                <Text className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                  Hidden Gem
                </Text>
              </View>
              <Text className="text-3xl font-bold text-white mt-auto">The Whispering Falls Oasis</Text>
              <Text className="text-lg text-white mb-4">A serene natural escape, just 4.5 km away.</Text>
              <View className="flex-1 flex-row text-white text-base ">
                <View className="flex-1 flex-row space-x-2 items-center">
                  <Ionicons name="star" size={16} color="#FBBF24" />
                  <Text className="text-white">4.9 {"(750 reviews)"}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => router.push(`/details/10`)}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-md text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <Text>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {activities.map((activity, index) => (
          <TouchableOpacity key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 ">
            <View className="relative h-72 w-full ">
              <Image source={activity.image} resizeMode="cover" className="w-full h-full object-cover" />

              <View className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-gradient-to-t from-black/70 to-transparent">
                <View className="flex-row flex-wrap gap-2 mb-3">
                  {activity.tags.map((tag, i) => (
                    <Text key={i} className={`${getRandomTagColor()} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                      {tag}
                    </Text>
                  ))}
                </View>

                <Text className="text-xl font-semibold text-white mb-1">{activity.title}</Text>
                <Text className="text-sm text-white mb-3 ">{activity.description}</Text>

                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="star" size={14} color="#FBBF24" />
                    <Text className="text-white text-sm">
                      {activity.rating} ({activity.reviews})
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => router.push(`/details/${index}`)}
                    className="bg-orange-500 px-4 py-2 rounded-xl text-sm font-semibold"
                  >
                    <Text className="text-white">View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
