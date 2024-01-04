import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../Const/constStyles";

const HelpScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    backgroundColor: colors.onboardingScreen,
    height: "100%",
    paddingTop: 70,
  },
});

export default HelpScreen;
