import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./DayButton.style";

export function DayButton({ day, isSelected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <Text style={s.sublabel}>{day}</Text>
      <View style={[s.dayButton, isSelected && s.selected]}>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}
