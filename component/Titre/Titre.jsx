import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./Titre.style";

export function Titre({ children, style }) {
  return <Text style={[styles.txt, style]}>{children}</Text>;
}
