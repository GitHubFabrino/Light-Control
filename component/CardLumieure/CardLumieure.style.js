import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  aaa: {
    height: 100,
    backgroundColor: "#d9d9d9",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  title: {
    color: "#3f3f3f",
    fontSize: 18,
    fontWeight: "bold",
    // width: "50%",
    // backgroundColor: "red",
  },
  cardLum: {
    width: "60%",
    // backgroundColor: "red",
    flexDirection: "column",
  },
  stat: {
    color: "gray",
    fontSize: 10,
    fontWeight: "bold",
  },
});
