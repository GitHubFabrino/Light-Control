import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./CardTime.style";

export function CardTime({ time, onPress }) {
  return (
    <View style={s.cardTime}>
      <TouchableOpacity onPress={onPress}>
        <Text>{time}</Text>
      </TouchableOpacity>
    </View>
  );
}
