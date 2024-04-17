import React, { useState } from "react";
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function SingUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log(email, password, nom);
    try {
      const response = await fetch("http://192.168.43.239:3000/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: nom,
          email: email,
          motDePasse: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("Login");
      } else {
        setError(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/singUp.png")} style={styles.dim} />
      </View>
      <Text style={styles.TextIntro}>Créer votre comptes</Text>
      <Text style={styles.TextIntroSub}>Veuillez remplire les formulaires</Text>
      <View style={styles.intro}>
        <TextInput
          type="text"
          placeholder={"Votre nom"}
          value={nom}
          onChangeText={(text) => setNom(text)}
          style={styles.input}
        />

        <TextInput
          type="text"
          placeholder={"Votre email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          type="password"
          placeholder={"Votre mot de passe"}
          showPassword={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin} s>
          <Text style={styles.titre}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSingUp}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textSingUp}>
            J'ai déja un compte ?{" "}
            <Text style={[styles.textSingUp, styles.lienSingUp]}>
              Se connecter
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
    marginTop: 50,
  },
  dim: {
    width: 100,
    height: 100,
  },
  version: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  intro: {
    flex: 3,
    width: "100%",
    // backgroundColor: "yellow",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  TextIntro: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3f3f3f",
    marginBottom: 5,
  },
  TextIntroSub: {
    fontSize: 12,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    backgroundColor: "#fff",
    marginVertical: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  button: {
    backgroundColor: "blue",
    width: "70%", // Ajuster la largeur de l'image
    height: 60, // Ajuster la hauteur de l'image
    justifyContent: "center",
    // position: "absolute",
    // top: 100,
    alignSelf: "center",
    borderRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  titre: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  textSingUp: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    // backgroundColor: "red",
    height: 50,
  },
  lienSingUp: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
});
