import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

const Dot = ({ index, currentIndex }) => {
    const opacity = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP,
    });
    const scale = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP,
    });
    return (
        <Animated.View
            style={{
                opacity,
                backgroundColor: "#218c74",
                width: 8,
                height: 8,
                borderRadius: 50,
                margin: 3.5,
                transform: [{ scale }],
            }}
        ></Animated.View>
    );
};

export default Dot;

const styles = StyleSheet.create({
    container: {},
});
