import React, { useState, useEffect } from "react";
import { useRoute, Button } from "@react-navigation/native";
import { SliderHuePicker } from "react-native-slider-color-picker";
import Slider from "@react-native-community/slider";

import tinycolor from "tinycolor2";
import {
  View,
  Text,
  ScrollView,
  Switch,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { s } from "./Controle.style";

const { width } = Dimensions.get("window");

export function Controle() {
  // const changeColor = (colorHsvOrRgb, resType) => {
  //   if (resType === "end") {
  //     setOldColor(tinycolor(colorHsvOrRgb).toHexString());
  //   }
  //   console.log(oldColor);
  // };

  const route = useRoute();

  if (route.params === undefined) {
    return <Text>Paramètres de route non définis</Text>;
  } else {
    const { lightData, updateLightState, updateBrigthness } = route.params;
    console.log(lightData);
    const [isEnabled, setIsEnabled] = useState(lightData.state);
    const [brightness, setBrightness] = useState(lightData.brightness);
    const [oldColor, setOldColor] = useState(lightData.color);
    const [selectedTime, setSelectedTime] = useState(new Date());

    useEffect(() => {
      if (lightData) {
        setIsEnabled(lightData.state);
        setBrightness(lightData.brightness);
        setSelectedDays(lightData.date);
        setOldColor(lightData.color);
        console.log(" color", oldColor);
      }
    }, [lightData]);

    const showTimePicker = async () => {
      try {
        const { action, hour, minute } = await TimePickerAndroid.open({
          hour: selectedTime.getHours(),
          minute: selectedTime.getMinutes(),
          is24Hour: true, // Set to false for 12-hour format
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          const newTime = new Date();
          newTime.setHours(hour);
          newTime.setMinutes(minute);
          setSelectedTime(newTime);
        }
      } catch ({ code, message }) {
        console.warn("Cannot open time picker", message);
      }
    };

    const [selectedDays, setSelectedDays] = useState(lightData.date);
    console.log("ppp", selectedDays);

    const toggleDay = (day) => {
      const updatedDays = selectedDays.includes(day)
        ? selectedDays.filter((selectedDay) => selectedDay !== day)
        : [...selectedDays, day];
      setSelectedDays(updatedDays);
      const { updateSelectedDays } = route.params;
      updateSelectedDays(lightData.id, updatedDays);
    };
    useEffect(() => {
      setIsEnabled(lightData.state);
    }, [lightData.state]);

    const onColorChange = (newColor) => {
      setColor(newColor);
    };

    const toggleSwitch = () => {
      const newSwitchState = !isEnabled;
      setIsEnabled(newSwitchState);
      updateLightState(lightData.id, newSwitchState);
    };

    // const handleBrightnessChange = (value) => {
    //   setBrightness(value);
    //   // updateBrigthness(lightData.id, value); /// ////////////////////////////////////////////
    // };
    const handleBrightnessChange = (value) => {
      setBrightness(value);
      const { updateBrightness } = route.params;
      updateBrightness(lightData.id, value);
    };

    const changeColor = (colorHsvOrRgb, resType) => {
      if (resType === "end") {
        setOldColor(tinycolor(colorHsvOrRgb).toHexString());
        console.log("mandea", tinycolor(colorHsvOrRgb).toHex());
        const { updateColor } = route.params;
        updateColor(lightData.id, tinycolor(colorHsvOrRgb).toHexString());
      }
    };
    console.log(" color", oldColor);
    console.log(" britness", brightness);
    console.log(" day", selectedDays);
    return (
      <View style={s.vue}>
        <Text style={s.label}>{lightData.lightName}</Text>
        <ScrollView>
          <View style={s.container1}>
            <Text style={s.label}>Etat</Text>
            <View style={s.etatLumieure}>
              {isEnabled ? (
                <Text style={s.sublabel}>Lumieure On</Text>
              ) : (
                <Text style={s.sublabel}>Lumieure Off</Text>
              )}
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <Text style={s.label}>Luminosité</Text>
            <View style={s.etat}>
              <Slider
                style={{ width: "100%" }}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                value={brightness}
                onValueChange={handleBrightnessChange}
              />
            </View>

            <Text style={s.label}>Couleur</Text>
            <View style={s.etat}>
              <SliderHuePicker
                ref={(view) => {
                  this.sliderHuePicker = view;
                }}
                oldColor={oldColor}
                trackStyle={[{ height: 12, width: width - 48 }]}
                thumbStyle={s.thumb}
                useNativeDriver={true}
                onColorChange={changeColor}
              />
              <Text style={s.label}>{oldColor}</Text>
            </View>

            <Text style={s.label}>Programme</Text>
            <View style={s.programme}>
              <View style={s.allumee}>
                <Text style={s.sublabel}>Allumée</Text>
                {/* <View style={s.container}>
                  <Button title="Select Time" onPress={showTimePicker} />
                  <Text style={s.selectedTime}>
                    Selected Time: {selectedTime.toLocaleTimeString()}
                  </Text>
                </View> */}
                <CardTime time={"12:00"} />
              </View>

              <View style={s.allumee}>
                <Text style={s.sublabel}>Eteint</Text>
                <CardTime time={"12:00"} />
              </View>
              <View style={s.repetition}>
                <Text style={s.sublabel}>Repretition</Text>
                <View style={s.date}>
                  <DayButton
                    day="Lun"
                    isSelected={selectedDays.includes("Lundi")}
                    onPress={() => toggleDay("Lundi")}
                  />
                  <DayButton
                    day="Mar"
                    isSelected={selectedDays.includes("Mardi")}
                    onPress={() => toggleDay("Mardi")}
                  />
                  <DayButton
                    day="Mer"
                    isSelected={selectedDays.includes("Mercredi")}
                    onPress={() => toggleDay("Mercredi")}
                  />
                  <DayButton
                    day="Jeu"
                    isSelected={selectedDays.includes("Jeudi")}
                    onPress={() => toggleDay("Jeudi")}
                  />
                  <DayButton
                    day="Ven"
                    isSelected={selectedDays.includes("Vendredi")}
                    onPress={() => toggleDay("Vendredi")}
                  />
                  <DayButton
                    day="Sam"
                    isSelected={selectedDays.includes("Samedi")}
                    onPress={() => toggleDay("Samedi")}
                  />
                  <DayButton
                    day="Dim"
                    isSelected={selectedDays.includes("Dimanche")}
                    onPress={() => toggleDay("Dimanche")}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const DayButton = ({ day, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <Text style={s.sublabel}>{day}</Text>
      <View style={[s.dayButton, isSelected && s.selected]}>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const CardTime = ({ time }) => {
  return (
    <View style={s.cardTime}>
      <TouchableOpacity>
        <Text>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};
