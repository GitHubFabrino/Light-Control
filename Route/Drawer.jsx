import React, { useState } from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { DATALIGHT } from "../Service/DataLight";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Controle } from "../Page/Controle/Controle";
import { Programmation } from "../Page/Programmation/Programmation";
import { Home } from "../Page/Home/Home";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// export function Drawer({user}) {
//   const Drawer = createDrawerNavigator();
//   const [lightList, setLightList] = useState(DATALIGHT);

//   return (
//     <Drawer.Navigator
//       // initialRouteName="Home"
//       screenOptions={{
//         drawerLabelStyle: {
//           color: "black",
//           fontFamily: "Alata-Regular",
//         },
//         drawerStyle: {
//           backgroundColor: "#f5f7f7",
//         },
//         headerTitleStyle: {
//           color: "white",
//           fontFamily: "Alata-Regular",
//           fontSize: 25,
//         },
//         headerTintColor: "white",
//       }}
//     >
//       <Drawer.Screen
//         name="Accueil"
//         options={{
//           drawerIcon: ({}) => (
//             <Image
//               source={require("../assets/acceuil5.png")}
//               style={{ height: 30, width: 30 }}
//             />
//           ),
//         }}
//       >
//         {(props) => (
//           <Home {...props} lightList={lightList} setLightList={setLightList} />
//         )}
//       </Drawer.Screen>

//       <Drawer.Screen
//         name="Contrôle"
//         component={Controle}
//         options={{
//           drawerIcon: ({}) => (
//             <Image
//               source={require("../assets/controle.png")}
//               style={{ height: 30, width: 30 }}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Programme"
//         options={{
//           drawerIcon: ({}) => (
//             <Image
//               source={require("../assets/programmation.png")}
//               style={{ height: 30, width: 30 }}
//             />
//           ),
//         }}
//       >
//         {(props) => (
//           <Programmation
//             {...props}
//             lightList={lightList}
//             setLightList={setLightList}
//           />
//         )}
//       </Drawer.Screen>
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: 50,
    height: 50,
    // backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export function CustomDrawerContent(props) {
  const { user, ...rest } = props;

  return (
    <DrawerContentScrollView {...rest}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/person1.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.username}>Bienvenue, {user.nom} !</Text>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}

export function Drawer({ user }) {
  const [lightList, setLightList] = useState(DATALIGHT);
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} user={user} />}
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
            // <Image
            //   source={require("../assets/acceuil5.png")}
            //   style={{ height: 30, width: 30 }}
            // />
            <Ionicons
              name="home-outline"
              size={30}
              color="#3f3f3f"
              style={{ padding: 10 }}
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
            <Ionicons
              name="game-controller"
              size={30}
              color="#3f3f3f"
              style={{ padding: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Programme"
        options={{
          drawerIcon: ({}) => (
            <Ionicons
              name="list"
              size={30}
              color="#3f3f3f"
              style={{ padding: 10 }}
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
