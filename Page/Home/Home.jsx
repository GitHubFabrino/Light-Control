import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert, Animated } from "react-native";
import { s } from "./Home.style";
import { Titre } from "../../component/Titre/Titre";
import { CardLumieure } from "../../component/CardLumieure/CardLumieure";
import { ButtonAdd } from "../../component/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import { useNavigation } from "@react-navigation/native";

export function Home({ lightList, setLightList }) {
  // const [fadeAnim] = useState(new Animated.Value(0));

  const [isAddDialoguVisible, setisAddDialoguVisible] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const nav = useNavigation();

  function goToControle(light) {
    nav.navigate("Contrôle", {
      lightData: light,
      updateLightState: (id, newState) => updateLightState(id, newState),
      updateBrightness: (id, newBrightness) =>
        updateBrightness(id, newBrightness),
      updateColor: (id, newColor) => updateColor(id, newColor),
      updateSelectedDays: (id, newSelectedDays) =>
        updateSelectedDays(id, newSelectedDays),
      updateSelectedTime: (id, newTimeOn, newTimeOff) =>
        updateSelectedTime(id, newTimeOn, newTimeOff),
    });
  }

  useEffect(() => {
    console.log("niova", lightList);
  }, [lightList]);

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
      brightness: 0.5,
      color: "#ffffff",
      date: [],
      timeOn: "00:00",
      timeOff: "00:00",
    };

    setLightList([...lightList, newLight]);
    setisAddDialoguVisible(false);
    setinputValue(" ");
  }

  function deleteLight(id) {
    Alert.alert("suppression", "Supprimer cette lumière ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setLightList(lightList.filter((light) => light.id !== id));
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }

  function updateLightState(id, newState) {
    console.log("ty state", newState);
    setLightList(
      lightList.map((light) =>
        light.id === id ? { ...light, state: newState } : light
      )
    );
    console.log(lightList);
  }

  function updateBrightness(id, newBrightness) {
    console.log("ty lum", newBrightness);
    setLightList(
      lightList.map((light) =>
        light.id === id ? { ...light, brightness: newBrightness } : light
      )
    );
    console.log(lightList);
  }
  function updateColor(id, newColor) {
    console.log("miova", newColor);
    setLightList(
      lightList.map((light) =>
        light.id === id ? { ...light, color: newColor } : light
      )
    );
  }

  function updateSelectedDays(id, newSelectedDays) {
    console.log("ty date", newSelectedDays);
    setLightList(
      lightList.map((light) =>
        light.id === id ? { ...light, date: newSelectedDays } : light
      )
    );
    console.log(lightList);
  }

  function updateSelectedTime(id, newTimeOn, newTimeOff) {
    console.log("ty Time", newTimeOn, newTimeOff);
    setLightList(
      lightList.map((light) =>
        light.id === id
          ? { ...light, timeOn: newTimeOn, timeOff: newTimeOff }
          : light
      )
    );
    console.log(lightList);
  }

  return (
    <>
      <View style={s.container}>
        <Titre>Listes des lumières </Titre>
        <ScrollView>{renderLightList()}</ScrollView>
        <ButtonAdd onPress={showAddDialogue} />
      </View>

      <Dialog.Container
        visible={isAddDialoguVisible}
        onBackdropPress={() => setisAddDialoguVisible(false)}
      >
        <Dialog.Title>Ajouter une lumière</Dialog.Title>
        <Dialog.Description>Choisi un nom</Dialog.Description>
        <Dialog.Input onChangeText={setinputValue} />
        <Dialog.Button
          label="Créer"
          onPress={addLight}
          disabled={inputValue.trim().length === 0}
        />
      </Dialog.Container>
    </>
  );
}
