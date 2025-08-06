import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import PopupModal from "./screens/PopupModal";
import MainAppScreen from "./screens/MainAppScreen";
import "../global.css";

export default function App() {
  const [stage, setStage] = useState("splash");
  const [showPopup, setShowPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const goToMain = () => {
    setStage("main");
  };

  const openDetails = () => {
    setShowDetails(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {stage === "splash" && (
        <SplashScreen
          onContinue={() => {
            setShowPopup(true);
            setStage("popup");
          }}
        />
      )}
      {stage === "popup" && (
        <PopupModal
          onClose={() => {
            setShowPopup(false);
            setStage("main");
          }}
        />
      )}
      {stage === "main" && !showDetails && <MainAppScreen onSelectActivity={openDetails} />}
    </SafeAreaView>
  );
}
