import { Text, View, ImageBackground } from "react-native";
import { styles } from "./Container.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bg from "../../assets/bg6.jpg";

export function Container({ children }) {
  return (
    <ImageBackground source={bg} style={styles.img_bg} imageStyle={styles.img}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
