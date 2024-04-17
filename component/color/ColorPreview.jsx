import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorPreview = ({ color }) => {
  return <View style={[styles.colorPreview, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  colorPreview: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
  },
});

export default ColorPreview;
