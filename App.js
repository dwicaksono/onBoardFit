import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./src/Authentication/Onboarding";

const AuthenStack = createStackNavigator();

const AuthenticationNavigator = () => {
    let [fontLoaded] = useFonts({
        "pro-text-bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
        "pro-text-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
        "pro-text-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    });

    if (!fontLoaded) {
        return <AppLoading />;
    } else {
        return (
            <AuthenStack.Navigator headerMode={"none"}>
                <AuthenStack.Screen name="Onboarding?" component={Onboarding} />
            </AuthenStack.Navigator>
        );
    }
};

export default function App() {
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
