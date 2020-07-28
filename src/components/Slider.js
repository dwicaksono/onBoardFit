import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Slider = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.titleContainer, ...props.style }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Slider;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
    transform: [
      { translateY: (0.65 * height - 100) / 2 },
      { translateX: width / 2 - 50 },
      { rotate: "90deg" },
    ],
  },
  title: {
    letterSpacing: 4,
    fontSize: 80,
    lineHeight: 80,
    textAlign: "center",
    fontFamily: "pro-text-bold",
    color: "white",
  },
});
