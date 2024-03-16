import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

export function CustomDrawerScreen({ name, component, source }) {
  return (
    <Drawer.Screen
      name={name}
      component={component}
      options={{
        drawerIcon: ({ color, number, focused }) => {
          return (
            <Image
              source={require("../../assets/bg.jpg")}
              style={{ height: 30, width: 30 }}
            />
          );
        },
      }}
    />
  );
}
