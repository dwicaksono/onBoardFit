import React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const Dot = (props) => {
    const { index, currentIndex } = props;
    return <Animated.View style={styles.container}></Animated.View>;
};

export default Dot;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#218c74",
        width: 8,
        height: 8,
        borderRadius: 50,
        margin: 3.5,
    },
});
