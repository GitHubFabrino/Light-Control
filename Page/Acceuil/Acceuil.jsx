import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { CustomButton } from "../../component/CustomButton/CustomButton";
import IM from "../../assets/image3.png";
export function Acceuil({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/image3.png")} />
      </View>

      <View style={styles.intro}>
        <Text style={styles.TextIntro}>Controler votre lumière</Text>
        <Text style={styles.TextIntroSub}>
          Automatiser votre eclerage grace a cette application
        </Text>
        <CustomButton
          title="Commencer"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
      <View style={styles.version}>
        <Text style={styles.versionVal}> version 1.0.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    width: "100%",
    height: "100%",
  },
  version: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  intro: {
    flex: 2,
    width: "100%",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  TextIntro: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3f3f3f",
    marginBottom: 10,
  },
  TextIntroSub: {
    fontSize: 12,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 70,
  },
  versionVal: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 70,
  },
});
