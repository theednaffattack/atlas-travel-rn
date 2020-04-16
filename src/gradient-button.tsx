//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {}

export const GradientButton: React.FC<GradientButtonProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {/* <LinearGradient
          start={[0.0, 0.0]}
          end={[1.0, 1.0]}
          colors={["rgb(210,48,120)", "rgb(254,97,97)", "rgb(255,121,85)"]}
          style={styles.gradient}
        > */}
        <Text style={styles.text}>Gradient Button</Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 25,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 8,
    opacity: 0.5,
    // paddingRight: 12,
    // paddingLeft: 12,
  },
  button: {
    width: "70%",
    height: 45,
    backgroundColor: "#e9486d",
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

// box-shadow: 0px 30px 80px 0px rgba(0, 0, 0, 0.1);
