import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import colors from "../../Const/constStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const navigate = useNavigation();

  const [loginEmail, setLoginEmail] = useState("");
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
            marginLeft:30
          }}
        >
          <Ionicons name="chevron-back-outline" size={20} color={"blue"} />
        </TouchableOpacity>
        <View style={styles.main}>
          <View style={{ rowGap: 10 }}>
            <Text style={{ fontSize: 30 }}>Welcome back</Text>
            <Text style={{ fontSize: 15, color: "gray" }}>
              Enter the email address you used to join Monzo
            </Text>
          </View>
          <View style={{ rowGap: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor={colors.grey}
              value={loginEmail}
              keyboardType="email-address"
              onChangeText={(text) => setLoginEmail(text)}
            />
            <TouchableOpacity>
              <Text style={{ color: colors.primary, fontSize: 12 }}>
                Get help logging in
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </View> */}

        <View style={styles.bottomSection}>
          <View style={styles.signupNotice}>
            <View>
              <Ionicons name="alert-circle" size={20} color="black" />
            </View>
            <View>
              <Text style={styles.signupNoticeText}>
                Already have a Monzo account? Make sure use the same email
                address.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => {
              navigate.navigate("AuthEmailScreen", {
                userEmail: loginEmail,
              });
            }}
          >
            <Text style={styles.signupButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        {/* 
      <View className=" flex-row items-center justify-between mx-5 py-5">
        <View>
          <OnboardingPaginator data={slideData} scrollX={scrollX} />
        </View>
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              // navigate.replace("Login");
            }}
            className="pr-6 text-gray-600 text-md font-semibold"
          >
            <Text className="">Skip</Text>
          </TouchableOpacity>
          <OnboardingNextButton
            percentage={(currentIndex + 1) * (100 / slideData.length)}
            buttonScrollTo={buttonScrollTo}
          />
        </View>
      </View> */}
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
    margin: 30,
    marginTop: 70,
    gap: 20,
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
    backgroundColor: "#F2F8F4",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  signupButtonText: {
    textAlign: "center",
    fontSize: 15,
    color: "gray",
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

export default LoginScreen;
