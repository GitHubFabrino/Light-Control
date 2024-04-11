import React, { useState } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DATALIGHT } from "../Service/DataLight";

import { Controle } from "../Page/Controle/Controle";
import { Programmation } from "../Page/Programmation/Programmation";
import { Home } from "../Page/Home/Home";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function Drawer() {
  const Drawer = createDrawerNavigator();
  const [lightList, setLightList] = useState(DATALIGHT);

  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        drawerLabelStyle: {
          color: "black",
          fontFamily: "Alata-Regular",
        },
        drawerStyle: {
          backgroundColor: "#f5f7f7",
        },
        headerTitleStyle: {
          color: "white",
          fontFamily: "Alata-Regular",
          fontSize: 25,
        },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Accueil"
        options={{
          drawerIcon: ({}) => (
            <Image
              source={require("../assets/acceuil5.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      >
        {(props) => (
          <Home {...props} lightList={lightList} setLightList={setLightList} />
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Contrôle"
        component={Controle}
        options={{
          drawerIcon: ({}) => (
            <Image
              source={require("../assets/controle.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Programme"
        options={{
          drawerIcon: ({}) => (
            <Image
              source={require("../assets/programmation.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      >
        {(props) => (
          <Programmation
            {...props}
            lightList={lightList}
            setLightList={setLightList}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
