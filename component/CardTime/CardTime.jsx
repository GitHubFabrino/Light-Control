import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./CardTime.style";

export function CardTime({ time, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.cardTime}>
      <Text style={s.TimeText}>{time}</Text>
    </TouchableOpacity>
  );
}
