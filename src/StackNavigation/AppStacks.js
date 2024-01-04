import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../Screens/AppScreens/HomeScreen";
import TrendsScreen from "../Screens/AppScreens/TrendsScreen";
import PaymentsScreen from "../Screens/AppScreens/PaymentsScreen";
import HelpScreen from "../Screens/AppScreens/HelpScreen";
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../Const/constStyles";

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName === "HomeScreen") {
            iconName = "home";
            size = focused ? 27 : 21;
            color = focused ? colors.buttonColor : "gray";
          } else if (routeName === "TrendsScreen") {
            iconName = "stats-chart";
            size = focused ? 27 : 21;
            color = focused ? colors.buttonColor : "gray";
          } else if (routeName === "PaymentsScreen") {
            iconName = "repeat";
            size = focused ? 27 : 21;
            color = focused ? colors.buttonColor : "gray";
          } else if (routeName === "HelpScreen") {
            iconName = "help";
            size = focused ? 27 : 21;
            color = focused ? colors.buttonColor : "gray";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarStyle: ({ focused ,color}) => {
        //   return color = focused ? colors.buttonColor : "gray";
        // },

        tabBarItemStyle: {
          // backgroundColor:"red",
        },
        tabBarIconStyle: {
          color: "red",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="TrendsScreen"
        component={TrendsScreen}
        options={{
          title: "Trends",
        }}
      />
      <Tab.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          title: "Payments",
        }}
      />

      <Tab.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: "Help",
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

const AppStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home_Screen" component={TabsNavigation} />
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
export default AppStacks;
