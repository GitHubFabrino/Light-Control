import { Text, TouchableOpacity } from "react-native";
import { style } from "./ButtonAdd.style";

export function ButtonAdd({ onPress }) {
  return (
    <>
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text style={style.txt}>+</Text>
      </TouchableOpacity>
    </>
  );
}
