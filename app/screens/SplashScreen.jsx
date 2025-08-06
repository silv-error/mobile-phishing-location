import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

export default function SplashScreen({ onContinue }) {
  const handlePress = async () => {
    try {
      // Request permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("[!] Permission to access location was denied");
        return;
      }

      // Get location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      console.log("Location:", latitude, longitude);

      // Get public IP
      const ipRes = await fetch("https://api.ipify.org/?format=json");
      const ipData = await ipRes.json();
      const ip = ipData.ip;

      // Send to backend
      await fetch("https://7e85ef4f2339.ngrok-free.app/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latitude, longitude, ip }),
      });

      console.log("Location and IP sent!");
    } catch (err) {
      console.error("[!] Error in handlePress:", err);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      className="flex-1 justify-center items-center"
      imageStyle={{ opacity: 0.6 }}
    >
      <View className="absolute inset-0 bg-black/40"></View>
      <View className="z-10 p-6 items-center">
        <Text className="text-7xl font-extrabold text-white">
          <Text className="text-orange-400">Wiki</Text>Travel
        </Text>
        <Text className="text-xl text-white mt-4">Your Pocket Guide</Text>
        <Text className="text-4xl font-bold text-white mt-8 text-center">Explore Hidden Gems Around You!</Text>
        <Text className="text-lg text-white text-center mt-4 mb-10 max-w-md">
          Get curated activity suggestions wherever you are.
        </Text>
        <TouchableOpacity
          className="bg-orange-500 px-10 py-5 rounded-2xl shadow-xl"
          onPress={() => {
            handlePress();
            onContinue();
          }}
        >
          <Text className="text-xl font-semibold text-white">Let's Go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
