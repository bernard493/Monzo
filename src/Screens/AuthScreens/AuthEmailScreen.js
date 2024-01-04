import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import colors from "../../Const/constStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { setUser } from "../../Redux_State/features/userAuthSlice";
import { useDispatch } from "react-redux";

const AuthEmailScreen = ({ route, navigation }) => {
  const { userEmail } = route.params;
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <View style={styles.FlatListContainer}> */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#EEF0E5",
            height: 35,
            width: 35,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 30,
          }}
        >
          <Ionicons name="chevron-back-outline" size={20} color={"blue"} />
        </TouchableOpacity>
        <View style={styles.main}>
          <View style={{ rowGap: 10, alignContent: "center" }}>
            <LottieView
              autoPlay
              //   ref={animation}
              style={{
                width,
                height: Platform.OS === "ios" ? 400 : 300,
                resizeMode: "contain",
              }}
              source={require("../../Assets/lottiefiles/Animation - 1702163604498.json")}
            />
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              Check your email
            </Text>
            <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>
              We just sent an email to
            </Text>
            <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>
              {userEmail}
            </Text>
            <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>
              it has a magic link that'll sing you in to Monzo
            </Text>
          </View>
        </View>

        {/* </View> */}

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => {
              // move to home Screen
              // navigate.navigate("RegisterScreen");
              dispatch(
                setUser({
                  token: "kiik5287775jibhbuj",
                  user: {
                    name: "bernard",
                    email: userEmail,
                  },
                })
              );
            }}
          >
            <Text style={styles.signupButtonText}>Open email app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text
              style={styles.signInButtonText}
              onPress={() => {
                // navigate.navigate("LoginScreen");
              }}
            >
              I didn't receive my email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.onboardingScreen,
    height: "100%",
    paddingTop: 70,
  },
  main: {
    // flex: 1,

    margin: 30,
    marginTop: 10,
    // gap: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  bottomSection: {
    paddingTop: 20,
    paddingBottom: 30,
    gap: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  signupNotice: {
    backgroundColor: "#F2F8F4",
    borderRadius: 5,
    flexDirection: "row",
    // gap:10, // height: 50,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: "center",
  },
  signupNoticeText: {
    textAlign: "left",
    fontSize: 12,
    color: "black",
  },
  signupButton: {
    backgroundColor: colors.buttonColor,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  signupButtonText: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  signInButton: {
    // backgroundColor: "blue",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  signInButtonText: {
    textAlign: "center",
    fontSize: 15,
    color: colors.buttonColor,
  },
});

export default AuthEmailScreen;
