import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";

import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AlataRegular from "./fonts/Alata-Regular.ttf";

import { Home } from "./Page/Home/Home";
import { Controle } from "./Page/Controle/Controle";
import { Container } from "./component/Container/Container";
import { Programmation } from "./Page/Programmation/Programmation";
import { Scenario } from "./Page/Scenario/Scenario";
import { ControleVocal } from "./Page/ControleVocal/ControleVocal";
import { Reglage } from "./Page/Reglage/Reglage";
import bg from "./assets/bg.jpg";

const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();

const navTheme = {
  colors: {
    background: bg,
  },
};

const screens = [
  {
    name: "Acceuil",
    component: Home,
    icon: require("./assets/acceuil5.png"),
  },
  // {
  //   name: "Contrôle",
  //   component: Controle,
  //   icon: require("./assets/controle.png"),
  // },
  {
    name: "Programmation",
    component: Programmation,
    icon: require("./assets/programmation.png"),
  },
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
export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  return (
    <Container>
      <NavigationContainer theme={navTheme}>
        {isFontLoaded ? (
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerLabelStyle: {
                color: "black",
                fontFamily: "Alata-Regular",
              },

              drawerStyle: {
                backgroundColor: "#f5f7f7",
                color: "red",
              },
              headerTitleStyle: {
                color: "white",
                fontFamily: "Alata-Regular",
                fontSize: 25,
              },
              headerTintColor: "white",
              // headerStyle: {},
            }}
          >
            {screens.map((screen) => (
              <Drawer.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={{
                  drawerIcon: ({ color, number, focused }) => (
                    <Image
                      source={screen.icon}
                      style={{ height: 30, width: 30 }}
                    />
                  ),
                }}
              />
            ))}
            <Drawer.Screen
              name="Controle"
              component={Controle}
              options={{
                drawerIcon: ({ color, number, focused }) => (
                  <Image
                    source={require("./assets/controle.png")}
                    style={{ height: 30, width: 30 }}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        ) : null}
      </NavigationContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
