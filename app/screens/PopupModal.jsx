import { View, Text, TouchableOpacity } from "react-native";

const options = ["Coffee Shop", "Unli Wings", "Swimming Pools"];

export default function PopupModal({ onClose }) {
  return (
    <View className="absolute inset-0 bg-black bg-opacity-70 justify-center items-center px-4">
      <View
        className="bg-white rounded-2xl p-8 w-full max-w-sm"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 6,
          elevation: 6,
        }}
      >
        <Text className="text-2xl font-bold text-center mb-6">Suggested Activities</Text>
        <Text className="text-gray-600 text-center mb-6">
          We've found something amazing just for you. This is the suggested activities base on your location!
        </Text>

        {options.map((opt, i) => (
          <View key={i} className="flex-row items-center bg-gray-50 p-3 rounded-lg mb-4">
            <Text className="text-orange-500 mr-3">📌</Text>
            <Text className="text-lg text-gray-800">{opt}</Text>
          </View>
        ))}

        <TouchableOpacity className="bg-orange-500 py-3 rounded-xl" onPress={onClose}>
          <Text className="text-lg font-semibold text-center text-white">See My Discovery!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
