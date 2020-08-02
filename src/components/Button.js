import React from "react";
import { RectButto } from "react-native-gesture-handler";
import { View, StyleSheet, Text, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Button = (props) => {
    return (
        <RectButton
            style={{ ...styles.container, ...props.style }}
            onPress={props.onPress}
        >
            <Text style={styles.label}>{props.title}</Text>
        </RectButton>
    );
};

export default Button;
const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: Platform.OS === "android" ? 50 : 25,
    },
    label: {
        fontFamily: "pro-text-semibold",
        color: "#ecf0f1",
        fontSize: 20,
    },
});
