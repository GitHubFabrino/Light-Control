import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Image } from "react-native";

import AlataRegular from "./fonts/Alata-Regular.ttf";

import { Home } from "./Page/Home/Home";
import { Controle } from "./Page/Controle/Controle";
import { Container } from "./component/Container/Container";
import { Programmation } from "./Page/Programmation/Programmation";
import { Scenario } from "./Page/Scenario/Scenario";
import { ControleVocal } from "./Page/ControleVocal/ControleVocal";
import { Reglage } from "./Page/Reglage/Reglage";
import bg from "./assets/bg.jpg";
import bg5 from "./assets/bg5.jpg";
import bg6 from "./assets/bg6.jpg";
import { DATALIGHT } from "./Service/DataLight";
import { Acceuil } from "./Page/Acceuil/Acceuil";
import { Login } from "./Page/Login/Login.jsx";
import { SingUp } from "./Page/Login/SingUp.jsx";
import { MainScreen } from "./Page/screen/MainScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const screens = [
  {
    name: "Scénario",
    component: Scenario,
    icon: require("./assets/scenario.webp"),
  },
  {
    name: "Contrôle Vocal",
    component: ControleVocal,
    icon: require("./assets/controleVocale.png"),
  },
  {
    name: "Réglage",
    component: Reglage,
    icon: require("./assets/reglage.png"),
  },
];

// const backgroundImages = [
//   //bg,
//   // bg5,
//   bg6,
//   // Ajoutez autant d'images de fond que nécessaire
// ];

export default function App() {
  // const [bgImage, setBgImage] = useState(bg); // Image de fond par défaut
  // const theme = useTheme();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Changez l'image de fond toutes les 5 minutes (300000 millisecondes)
  //     const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  //     console.log("eeee" + randomIndex);
  //     setBgImage(backgroundImages[randomIndex]);
  //   }, 3000); // 300000 millisecondes = 5 minutes

  //   return () => clearInterval(interval);
  // }, []);

  const navTheme = {
    colors: {
      background: bg,
    },
  };

  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  const [lightList, setLightList] = useState(DATALIGHT);
  return (
    <Container>
      <NavigationContainer theme={navTheme}>
        {isFontLoaded ? (
          <Stack.Navigator
            initialRouteName="Acceuil"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Acceuil" component={Acceuil} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SingUp" component={SingUp} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
        ) : // <Drawer.Navigator
        //   initialRouteName="Home"
        //   screenOptions={{
        //     drawerLabelStyle: {
        //       color: "black",
        //       fontFamily: "Alata-Regular",
        //     },
        //     drawerStyle: {
        //       backgroundColor: "#f5f7f7",
        //     },
        //     headerTitleStyle: {
        //       color: "white",
        //       fontFamily: "Alata-Regular",
        //       fontSize: 25,
        //     },
        //     headerTintColor: "white",
        //   }}
        // >
        //   <Drawer.Screen
        //     name="Accueil"
        //     options={{
        //       drawerIcon: ({}) => (
        //         <Image
        //           source={require("./assets/acceuil5.png")}
        //           style={{ height: 30, width: 30 }}
        //         />
        //       ),
        //     }}
        //   >
        //     {(props) => (
        //       <Home
        //         {...props}
        //         lightList={lightList}
        //         setLightList={setLightList}
        //       />
        //     )}
        //   </Drawer.Screen>

        //   <Drawer.Screen
        //     name="Contrôle"
        //     component={Controle}
        //     options={{
        //       drawerIcon: ({}) => (
        //         <Image
        //           source={require("./assets/controle.png")}
        //           style={{ height: 30, width: 30 }}
        //         />
        //       ),
        //     }}
        //   />
        //   <Drawer.Screen
        //     name="Programme"
        //     options={{
        //       drawerIcon: ({}) => (
        //         <Image
        //           source={require("./assets/programmation.png")}
        //           style={{ height: 30, width: 30 }}
        //         />
        //       ),
        //     }}
        //   >
        //     {(props) => (
        //       <Programmation
        //         {...props}
        //         lightList={lightList}
        //         setLightList={setLightList}
        //       />
        //     )}
        //   </Drawer.Screen>
        //   {/* {screens.map((screen) => (
        //     <Drawer.Screen
        //       key={screen.name}
        //       name={screen.name}
        //       component={screen.component}
        //       options={{
        //         drawerIcon: () => (
        //           <Image
        //             source={screen.icon}
        //             style={{ height: 30, width: 30 }}
        //           />
        //         ),
        //       }}
        //     />
        //   ))} */}
        // </Drawer.Navigator>
        null}
      </NavigationContainer>
    </Container>
  );
}
