import { Text, View } from "react-native";
import { s } from "./SubCard.style";

export function SubCard({ title, data }) {
  return (
    <View style={s.item}>
      <Text style={s.subTitle}>{title}</Text>
      <Text style={s.val}>{data}</Text>
    </View>
  );
}
