import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  noItem: {
    alignSelf: "center",
    width: 250,
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 100,
  },
  vue: {
    padding: 15,
  },
  label: {
    fontFamily: "Alata-Regular",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  etat: {
    height: 60,
    backgroundColor: "#fcd7b3",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fcd7b3",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    padding: 10,
    marginBottom: 20,
  },
  sublabel: {
    fontFamily: "Alata-Regular",
    fontSize: 15,
    color: "black",
  },
  container1: {
    marginTop: 10,
  },
  etatLumieure: {
    height: 60,
    backgroundColor: "#fcd7b3",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fcd7b3",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },
  thumb: {
    width: 20,
    height: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  programme: {
    height: 200,
    backgroundColor: "#fcd7b3",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fcd7b3",
    // justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    padding: 10,
    marginBottom: 20,
  },
  allumee: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 5,
    borderTopWidth: 1,
  },
  repetition: {
    marginBottom: 10,
    marginTop: 10,
  },
  cardTime: {
    borderWidth: 1,
    borderBlockColor: "black",
    width: 50,
    alignItems: "center",
    borderRadius: 4,
  },
});
