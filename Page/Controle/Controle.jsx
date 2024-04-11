import React, { useState, useEffect } from "react";
import { useRoute, Button } from "@react-navigation/native";
import { SliderHuePicker } from "react-native-slider-color-picker";
import Slider from "@react-native-community/slider";
import DatePicker from "@react-native-community/datetimepicker";
import { DayButton } from "../../component/DayButton/DayButton";
import { CardTime } from "../../component/CardTime/CardTime";

import tinycolor from "tinycolor2";
import { View, Text, ScrollView, Switch, Dimensions } from "react-native";

import { s } from "./Controle.style";

const { width } = Dimensions.get("window");

export function Controle() {
  const route = useRoute();

  if (route.params === undefined) {
    return <Text style={s.noItem}> Veuillez sélectionne une lumière</Text>;
  } else {
    const { lightData } = route.params;
    const [isEnabled, setIsEnabled] = useState(lightData.state);

    const [brightness, setBrightness] = useState(lightData.brightness);
    const [oldColor, setOldColor] = useState(lightData.color);

    const [selectedDays, setSelectedDays] = useState(lightData.date);

    const [showTimePickerOn, setShowTimePickerOn] = useState(false);
    const [showTimePickerOff, setShowTimePickerOff] = useState(false);

    const date = new Date();
    function formateTime(date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    }

    const [timeOn, setTimeOn] = useState(formateTime(date));
    const [timeOff, setTimeOff] = useState(formateTime(date));

    useEffect(() => {
      if (lightData) {
        setIsEnabled(lightData.state);
        setBrightness(lightData.brightness);
        setSelectedDays(lightData.date);
        setOldColor(lightData.color);
        console.log(" color", oldColor);
        console.log(timeOn);
        console.log(timeOff);
      }
    }, [lightData]);

    useEffect(() => {
      setIsEnabled(lightData.state);
    }, [lightData.state]);

    const toggleDay = (day) => {
      const updatedDays = selectedDays.includes(day)
        ? selectedDays.filter((selectedDay) => selectedDay !== day)
        : [...selectedDays, day];
      setSelectedDays(updatedDays);
      const { updateSelectedDays } = route.params;
      updateSelectedDays(lightData.id, updatedDays);
    };

    const toggleSwitch = () => {
      const newSwitchState = !isEnabled;
      setIsEnabled(newSwitchState);
      const { updateLightState } = route.params;
      updateLightState(lightData.id, newSwitchState);
    };

    const handleBrightnessChange = (value) => {
      setBrightness(value);
      const { updateBrightness } = route.params;
      updateBrightness(lightData.id, value);
    };

    const changeColor = (colorHsvOrRgb, resType) => {
      if (resType === "end") {
        let newColor = tinycolor(colorHsvOrRgb).toHex8String();
        console.log(newColor);
        setOldColor(newColor);
        const { updateColor } = route.params;
        updateColor(lightData.id, newColor);
      }
    };
    useEffect(() => {
      console.log("Nouvelle valeur time ", timeOn, timeOff);
      const { updateSelectedTime } = route.params;
      updateSelectedTime(lightData.id, timeOn, timeOff);
    }, [timeOn, timeOff]);

    return (
      <View style={s.vue}>
        <Text style={s.label}>{lightData.lightName}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.container1}>
            <View style={s.etatLumieure}>
              <Text style={s.labelIn}>Etat</Text>
              <View style={s.etat1}>
                {isEnabled ? (
                  <Text style={s.sublabel}>Lumière On</Text>
                ) : (
                  <Text style={s.sublabel}>Lumière Off</Text>
                )}
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            <View style={s.etatLumieure}>
              <Text style={s.labelIn}>Luminosité</Text>
              <View style={s.etat1}>
                <Slider
                  style={{ width: "100%" }}
                  minimumValue={0}
                  maximumValue={1}
                  step={0.01}
                  value={brightness}
                  onValueChange={handleBrightnessChange}
                />
              </View>
            </View>

            <View style={s.etatLumieure}>
              <Text style={s.labelIn}>Couleur</Text>
              <View style={s.etat1}>
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
              </View>
            </View>

            <Text style={[s.label, s.labelProg]}>Programme</Text>
            <View style={s.programme}>
              <View style={s.allumee}>
                <Text style={s.sublabel}>Allumée</Text>

                <CardTime
                  time={timeOn}
                  onPress={() => setShowTimePickerOn(true)}
                />
                {showTimePickerOn && (
                  <DatePicker
                    value={date}
                    mode="time"
                    onChange={(event, selectedDate) => {
                      const currentTime = selectedDate || date;
                      console.log(currentTime);
                      setShowTimePickerOn(false);
                      setTimeOn(formateTime(currentTime));
                    }}
                  />
                )}
              </View>

              <View style={s.allumee}>
                <Text style={s.sublabel}>Eteint</Text>
                <CardTime
                  time={timeOff}
                  onPress={() => setShowTimePickerOff(true)}
                />
                {showTimePickerOff && (
                  <DatePicker
                    value={date}
                    mode="time"
                    onChange={(event, selectedDate) => {
                      const currentTime = selectedDate || date;
                      setShowTimePickerOff(false);
                      setTimeOff(formateTime(currentTime));
                    }}
                  />
                )}
              </View>
              <View style={s.repetition}>
                <Text style={s.sublabel}>Répétition</Text>
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
