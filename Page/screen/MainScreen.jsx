import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
// import { CustomButton } from "../components/CustomButton";
import { Drawer } from "../../Route/Drawer";
export function MainScreen({ navigation }) {
  return <Drawer navigation={navigation} />;
}

const styles = StyleSheet.create({});
