import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import colors from "../../Const/constStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import BalanceDetail from "../../Components/BalanceDetail/BalanceDetail";
import Activities from "../../Components/Activity/Activities";
import Pots from "../../Components/Pots/Pots";

const HomeScreen = () => {
  const { user, userToken } = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={styles.topNav}>
        <View style={styles.topNavProfile}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E8EEE8",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                ...styles.text,
                color: colors.buttonColor,
                fontSize: 15,
              }}
            >
              Upgrade
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topNavProfile}>
          <TouchableOpacity
            style={{
              backgroundColor: "#E8EEE8",
              padding: 4,
              borderRadius: 100,
            }}
          >
            <Ionicons name="gift" size={25} color={colors.buttonColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E8EEE8",
              padding: 4,
              borderRadius: 100,
            }}
          >
            <Ionicons name="search" size={25} color={colors.buttonColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-circle" size={40} color={colors.buttonColor} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Account and Balance Information */}
      <ScrollView style={styles.main}>
        <BalanceDetail />

        <Activities />
        <Pots />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.onboardingScreen,
    height: "100%",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Platform.OS === "ios" ? "5%" : "3%",
    // paddingHorizontal: Platform.OS === "ios" ? "auto" : "5%",
    marginBottom: "5%",
    paddingTop: "13%",
    // backgroundColor:"red"
    // backgroundColor: rgba(255, 0, 0, 0.5)
  },
  topNavProfile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  main: {
    // height: 50,
    // backgroundColor: colors.secondary,
    padding: Platform.OS === "ios" ? "5%" : "3%",
    columnGap: 100,
    flexDirection: "column",
    // marginBottom:30
    // alignItems: "center",
  },
});

export default HomeScreen;
