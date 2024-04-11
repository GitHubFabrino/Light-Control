import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    padding: 10,
    margin: 15,
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    justifyContent: "center",
    shadowColor: "#94939382",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: "Alata-Regular",
    color: "#3f3f3f",
    fontWeight: "bold",
  },

  date: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
});
