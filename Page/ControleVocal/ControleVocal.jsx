import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import Voice from "@react-native-voice/voice";

export function ControleVocal({}) {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = () => setIsRecording(true);
    Voice.onSpeechEnd = () => setIsRecording(false);
    Voice.onSpeechError = (err) => setError(err.error);
    Voice.onSpeechResults = (result) => setResult(result.value[0]);

    // Cleanup function to remove event listeners when unmounting
    return () => {
      Voice.removeAllListeners();
    };
  }, []);

  const startRecording = async () => {
    try {
      await Voice.start("en-US");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
    console.log(isRecording);
    setIsRecording(true);
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      <Text>Voici input</Text>
      <Text>{result}</Text>
      <Text>{error}</Text>

      <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
        <Text>{isRecording ? "Stop Recording " : "Start Recording"}</Text>
      </TouchableOpacity>
    </View>
  );
}

// import React from "react";
// import { useState } from "react";
// import { View, Text, Button } from "react-native";
// import Voice from "react-native-voice";

// export function ControleVocal({}) {
//   const [isListening, setIsListening] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");

//   const startListening = async () => {
//     try {
//       await Voice.start("en-US");
//       setIsListening(true);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const stopListening = async () => {
//     try {
//       await Voice.stop();
//       setIsListening(false);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   Voice.onSpeechResults = (e) => {
//     setRecognizedText(e.value[0]);
//   };
//   return (
//     <View>
//       <Button
//         title={isListening ? "Stop Listening" : "Start Listening"}
//         onPress={isListening ? stopListening : startListening}
//       />
//       <Text>{recognizedText}</Text>
//     </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import Voice from "react-native-voice";

// export function ControleVocal({}) {
//   const [isListening, setIsListening] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");

//   useEffect(() => {
//     Voice.onSpeechResults = (e) => {
//       setRecognizedText(e.value[0]);
//     };

//     return () => {
//       // Cleanup - remove event listener
//       Voice.removeAllListeners();
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   const startListening = async () => {
//     try {
//       await Voice.start("en-US");
//       setIsListening(true);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const stopListening = async () => {
//     try {
//       await Voice.stop();
//       setIsListening(false);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <View>
//       <Button
//         title={isListening ? "Stop Listening" : "Start Listening"}
//         onPress={isListening ? stopListening : startListening}
//       />
//       <Text>{recognizedText}</Text>
//     </View>
//   );
// }
