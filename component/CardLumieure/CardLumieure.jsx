import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import { s } from "./CardLumieure.style";

export function CardLumieure({
  light,
  state,
  onLongPress,
  id,
  onPress,
  data,
  updateLightState,
}) {
  const [isEnabled, setIsEnabled] = useState(state);

  const toggleSwitch = () => {
    const newSwitchState = !isEnabled;
    setIsEnabled(newSwitchState);
    updateLightState(id, newSwitchState);
  };
  return (
    <TouchableOpacity
      style={s.aaa}
      onLongPress={() => onLongPress(id)}
      onPress={onPress}
    >
      {isEnabled ? (
        <TouchableOpacity onPress={toggleSwitch}>
          <Image
            source={require("../../assets/lampeOn.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleSwitch}>
          <Image
            source={require("../../assets/lampeOff.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
      )}
      <View style={s.cardLum}>
        <Text style={s.title}>{light}</Text>
        <Text style={s.stat}>{isEnabled ? "Allumée" : "Eteint"}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#f5dd4b" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  );
}
