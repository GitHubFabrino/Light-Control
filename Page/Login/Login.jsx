import React, { useState } from "react";
import { Alert } from "react-native/Libraries/Alert/Alert";
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CustomButton } from "../../component/CustomButton/CustomButton";
export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    try {
      const response = await fetch(
        "http://192.168.43.239:3000/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            motDePasse: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Connexion réussie, redirigez l'utilisateur vers l'écran suivant
        navigation.navigate("MainScreen");
      } else {
        // Afficher un message d'erreur si la connexion a échoué
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
        <Image source={require("../../assets/login.png")} style={styles.dim} />
      </View>
      <Text style={styles.TextIntro}>Bienvenu</Text>
      <Text style={styles.TextIntroSub}>Authentifier vous !!</Text>
      <View style={styles.intro}>
        <TextInput
          type="email"
          placeholder="E-mail ou pseudo"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          type="password"
          placeholder="Mot de passe"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.titre}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSingUp}
          onPress={() => {
            navigation.navigate("SingUp");
          }}
        >
          <Text style={styles.textSingUp}>
            Avez vous déja un compte ?{" "}
            <Text style={[styles.textSingUp, styles.lienSingUp]}>SingUp</Text>
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
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
    marginTop: 60,
    height: 150,
  },
  dim: {
    width: 100,
    height: 100,
  },
  version: {
    // backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  intro: {
    // flex: 4,
    width: "100%",
    // backgroundColor: "yellow",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  TextIntro: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3f3f3f",
    marginBottom: 10,
  },
  TextIntroSub: {
    fontSize: 12,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 10,
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
    backgroundColor: "#0613ffbb",
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
  },
  lienSingUp: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
