import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";

import { ScrollView } from "react-native-gesture-handler";
import {
    useValue,
    interpolateColor,
    onScrollEvent,
    useScrollHandler,
    scrollHandler,
} from "react-native-redash";

import Slide from "../components/Slider";
import SubSlide from "../components/SubSlide";
import Dot from "../components/Dot";

const slideData = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description:
            "Confused about your outfit? Don't worry! Find The Best Outfit here",
        color: "#00cec9",
        picture: require("../../assets/img/1.png"),
    },
    {
        title: "Playful",
        subtitle: "Hear it  first, Wear it first",
        description:
            "Hatting clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#fdcb6e",
        picture: require("../../assets/img/2.png"),
    },
    {
        title: "Excentric",
        subtitle: "Your Sytle, Your way",
        description:
            "Create your individual & unique style and look amazing everyday",
        color: "#e84393",
        picture: require("../../assets/img/3.png"),
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description:
            "Discovery the latest trends in fashion and explore your personality",
        color: "#6c5ce7",
        picture: require("../../assets/img/4.png"),
    },
];

const Onboarding = () => {
    // const scroll = useRef < Animated.ScrollView > null;
    const scroll = useRef(new Animated.ScrollView(0)).current;

    const { scrollHandler, x } = useScrollHandler();

    const backgroundColor = interpolateColor(x, {
        inputRange: slideData.map((_, i) => i * width),
        outputRange: slideData.map((slide) => slide.color),
    });
    const bagi = (x, index) => {
        x = devide(x, index);
        return x;
    };
    return (
        <View style={styles.contianerScreen}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...scrollHandler}
                >
                    {slideData.map(({ title, picture }, idx) => (
                        <Slide {...{ title, picture }} key={idx} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor,
                    }}
                />
                <View style={styles.footerContainer}>
                    <View style={styles.pagination}>
                        {slideData.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={x}
                                {...{ index, x }}
                            />
                        ))}
                    </View>
                    <Animated.View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            width: width * slideData.length,
                            transform: [{ translateX: multiply(x, -1) }],
                        }}
                    >
                        {slideData.map(({ subtitle, description }, idx) => (
                            <SubSlide
                                {...{ subtitle, description }}
                                last={slideData.some(
                                    (item) => slideData.length - 1 === idx
                                )}
                                key={idx}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({
                                            x: width * (idx + 1),
                                            animated: true,
                                        });
                                    }
                                }}
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    contianerScreen: {
        flex: 1,
        backgroundColor: "white",
    },
    footerContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 75,
        flex: 1,
    },
    slider: {
        height: 0.68 * height,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});
