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
export function MainScreen({ navigation, route }) {
  const user = route.params?.user;
  console.log("ici", user);
  return <Drawer navigation={navigation} user={user} />;
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.header}>
  //       <Text style={styles.username}>Bienvenue, {user.nom} !</Text>
  //     </View>
  //     <Drawer navigation={navigation} />
  //   </View>
  // );
}

const styles = StyleSheet.create({});
