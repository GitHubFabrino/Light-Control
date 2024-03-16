import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { s } from "./Home.style";
import { Titre } from "../../component/Titre/Titre";
import { CardLumieure } from "../../component/CardLumieure/CardLumieure";
import { ButtonAdd } from "../../component/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import { useNavigation } from "@react-navigation/native";

export function Home({}) {
  const [isAddDialoguVisible, setisAddDialoguVisible] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [lightList, setlightList] = useState([
    {
      id: 1,
      lightName: "Lumieure chambre 1",
      state: false,
      brightness: 0.5,
      color: "#ffffff",
      date: [],
    },
    {
      id: 2,
      lightName: "Lumieure chambre",
      state: true,
      brightness: 0.5,
      color: "#ffffff",
      date: [],
    },
    {
      id: 3,
      lightName: "Lumieure chambre",
      state: false,
      brightness: 0.5,
      color: "#ffffff",
      date: [],
    },
    {
      id: 4,
      lightName: "Lumieure chambre",
      state: true,
      brightness: 0.5,
      color: "#ffffff",
      date: [],
    },
    {
      id: 5,
      lightName: "Lumieure chambre",
      state: true,
      brightness: 0.5,
      color: "#ffffff",
      date: [],
    },
  ]);

  const nav = useNavigation();

  function deleteLight(id) {
    Alert.alert("suppression", "Supprimer cette tache ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setlightList(lightList.filter((light) => light.id !== id));
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }
  ////////////////////////////////////////////////////////
  // function goToControle(light) {
  //   nav.navigate("Controle", {
  //     lightData: light,
  //     updateLightState: (id, newState) => updateLightState(id, newState),
  //     updateBrigthness: (id, newBrightness) =>
  //       updateBrigthness(id, newBrightness),
  //   });
  // }
  function goToControle(light) {
    nav.navigate("Controle", {
      lightData: light,
      updateLightState: (id, newState) => updateLightState(id, newState),
      updateBrightness: (id, newBrightness) =>
        updateBrightness(id, newBrightness),
      updateColor: (id, newColor) => updateColor(id, newColor),
      updateSelectedDays: (id, newSelectedDays) =>
        updateSelectedDays(id, newSelectedDays),
    });
    console.log("data", lightList);
  }
  ////////////////////////////////////////////////////////
  function renderLightList() {
    return lightList.map((light) => {
      return (
        <View key={light.id}>
          <CardLumieure
            light={light.lightName}
            state={light.state}
            id={light.id}
            onLongPress={deleteLight}
            onPress={() => goToControle(light, lightList)}
            data={light}
            updateLightState={updateLightState}
          />
        </View>
      );
    });
  }
  function showAddDialogue() {
    setisAddDialoguVisible(true);
  }

  function addLight() {
    const idNew = lightList.length + 1;

    const newLight = {
      id: idNew,
      lightName: inputValue,
      state: false,
    };

    setlightList([...lightList, newLight]);

    setisAddDialoguVisible(false);
  }

  function updateLightState(id, newState) {
    setlightList(
      lightList.map((light) =>
        light.id === id ? { ...light, state: newState } : light
      )
    );
    console.log(lightList);
  }

  function updateBrightness(id, newBrightness) {
    setlightList(
      lightList.map((light) =>
        light.id === id ? { ...light, brightness: newBrightness } : light
      )
    );
  }
  function updateColor(id, newColor) {
    console.log("miova", newColor);
    setlightList(
      lightList.map((light) =>
        light.id === id ? { ...light, color: newColor } : light
      )
    );
  }

  function updateSelectedDays(id, newSelectedDays) {
    setlightList(
      lightList.map((light) =>
        light.id === id ? { ...light, date: newSelectedDays } : light
      )
    );
  }

  return (
    <>
      <View style={s.container}>
        <Titre>Listes des lumieres </Titre>
        <ScrollView>{renderLightList()}</ScrollView>
        <ButtonAdd onPress={showAddDialogue} />
      </View>

      <Dialog.Container
        visible={isAddDialoguVisible}
        onBackdropPress={() => setisAddDialoguVisible(false)}
      >
        <Dialog.Title>Ajouter une lumieure</Dialog.Title>
        <Dialog.Description>Choisi un nom</Dialog.Description>
        <Dialog.Input onChangeText={setinputValue} />
        <Dialog.Button
          label="Creer"
          onPress={addLight}
          disabled={inputValue.trim().length === 0}
        />
      </Dialog.Container>
    </>
  );
}
