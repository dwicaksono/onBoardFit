import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

import Button from "./Button";

const SubSlide = ({ subtitle, description, last, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
                title={last ? "Let's get started" : "next"}
                style={last ? styles.primary : styles.default}
                {...{ onPress }}
            />
        </View>
    );
};

export default SubSlide;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        // width,
    },
    subtitle: {
        fontFamily: "pro-text-semibold",
        fontSize: 24,
        color: "#34495e",
        textAlign: "center",
        lineHeight: 30,
        marginBottom: 12,
    },
    description: {
        fontFamily: "pro-text-regular",
        fontSize: 18,
        lineHeight: 24,
        color: "#34495e",
        textAlign: "center",
        marginBottom: 40,
    },
    primary: {
        backgroundColor: "#218c74",
    },
    default: {
        backgroundColor: "#34495e",
    },
});
