import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.titre}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    width: "70%", // Ajuster la largeur de l'image
    height: 60, // Ajuster la hauteur de l'image
    justifyContent: "center",
    // position: "absolute",
    // top: 100,
    alignSelf: "center",
    borderRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  titre: {
    color: "#3f3f3f",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
});
