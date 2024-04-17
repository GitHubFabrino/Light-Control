import { Text, View } from "react-native";
import { s } from "./SubCard.style";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

export function SubCard({ title, data, color, name }) {
  return (
    <View style={s.item}>
      <Ionicons name={name} size={20} color={color} style={{ padding: 10 }} />
      <Text style={s.subTitle}>{title}</Text>
      <Text style={s.val}>{data}</Text>
    </View>
  );
}
