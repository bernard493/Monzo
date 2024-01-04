import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../Screens/AuthScreens/OnboardingScreen";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import RegisterScreen from "../Screens/AuthScreens/RegisterScreen";
import AuthEmailScreen from "../Screens/AuthScreens/AuthEmailScreen";

const Stack = createNativeStackNavigator();
const AuthStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="AuthEmailScreen" component={AuthEmailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AuthStacks;
