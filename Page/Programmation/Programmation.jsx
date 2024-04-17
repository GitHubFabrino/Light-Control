import React from "react";
import { View, Text, ScrollView } from "react-native";
import { s } from "./Programmation.style";
import { SubCard } from "../../component/SubCard/SubCard";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
export function Programmation({ lightList, setLightList }) {
  function renderProgamme() {
    return lightList.map((light, index) => {
      return (
        <View style={s.container} key={index}>
          <View style={s.item}>
            <Text style={s.title}>{light.lightName}</Text>
            {light.state ? (
              <Text style={s.val}>ON</Text>
            ) : (
              <Text style={s.val}>OFF</Text>
            )}
          </View>

          <SubCard
            title={"Luminosité"}
            data={(light.brightness * 100).toFixed(0) + "%"}
            color={"blue"}
            name={"brightness-6"}
          />

          <SubCard
            title={"Couleure"}
            data={light.color}
            color={"orange"}
            name={"invert-colors"}
          />
          {/* <View style={[s.colorPreview, { backgroundColor: light.color }]} /> */}

          <Text style={s.title}>Programme</Text>

          <SubCard
            title={"Allumée"}
            data={light.timeOn}
            color={"yellow"}
            name={"lightbulb-on-outline"}
          />
          <SubCard
            title={"Eteint"}
            data={light.timeOff}
            color={"orange"}
            name={"lightbulb-off-outline"}
          />

          <Text style={s.title}>Date</Text>
          <View style={s.date}>
            {light.date.map((date) => (
              <Text>{date}</Text>
            ))}
          </View>
        </View>
      );
    });
  }
  return (
    <View>
      <ScrollView>{renderProgamme()}</ScrollView>
    </View>
  );
}
