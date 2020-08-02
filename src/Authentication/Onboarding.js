import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply } from "react-native-reanimated";

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
    },
    {
        title: "Playful",
        subtitle: "Hear it  first, Wear it first",
        description:
            "Hatting clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#fdcb6e",
    },
    {
        title: "Excentric",
        subtitle: "Your Sytle, Your way",
        description:
            "Create your individual & unique style and look amazing everyday",
        color: "#e84393",
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description:
            "Discovery the latest trends in fashion and explore your personality",
        color: "#6c5ce7",
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
                    {slideData.map(({ title }, idx) => (
                        <Slide {...{ title }} key={idx} />
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
                <Animated.View
                    style={[
                        styles.footerContainer,
                        {
                            width: width * slideData.length,
                            flex: 1,
                            // flexDirection: "row",
                            transform: [{ translateX: multiply(x, -1) }],
                        },
                    ]}
                >
                    <View style={styles.pagination}>
                        {slideData.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={index}
                                {...{ index, x }}
                            />
                        ))}
                    </View>
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
        flexDirection: "row",
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
        // width: width * slideData.length,
        width,
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        flexDirection: "row",
    },
});
