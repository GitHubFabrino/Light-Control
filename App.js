import "react-native-gesture-handler";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import { DATALIGHT } from "./Service/DataLight";

const Drawer = createDrawerNavigator();

const navTheme = {
  colors: {
    background: bg,
  },
};

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

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  const [lightList, setLightList] = useState(DATALIGHT);
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
                    source={require("./assets/acceuil5.png")}
                    style={{ height: 30, width: 30 }}
                  />
                ),
              }}
            >
              {(props) => (
                <Home
                  {...props}
                  lightList={lightList}
                  setLightList={setLightList}
                />
              )}
            </Drawer.Screen>

            <Drawer.Screen
              name="Contrôle"
              component={Controle}
              options={{
                drawerIcon: ({}) => (
                  <Image
                    source={require("./assets/controle.png")}
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
                    source={require("./assets/acceuil5.png")}
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
            {screens.map((screen) => (
              <Drawer.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={{
                  drawerIcon: () => (
                    <Image
                      source={screen.icon}
                      style={{ height: 30, width: 30 }}
                    />
                  ),
                }}
              />
            ))}
          </Drawer.Navigator>
        ) : null}
      </NavigationContainer>
    </Container>
  );
}
