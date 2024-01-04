import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import slideData from "../../Components/Onboarding/slides.js";
import OnboardingItem from "../../Components/Onboarding/OnboardingItem.js";
import OnboardingPaginator from "../../Components/Onboarding/OnboardingPaginator.js";
import OnboardingNextButton from "../../Components/Onboarding/OnboardingNextButton.js";
import { useNavigation } from "@react-navigation/native";
import colors from "../../Const/constStyles.js";

const OnboardingScreen = ({ navigation }) => {
  const navigate = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const buttonScrollTo = () => {
    if (currentIndex < slideData.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // navigate.replace("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.FlatListContainer}> */}
      <FlatList
        data={slideData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      {/* </View> */}
      <View style={styles.OnboardingPaginator}>
        <OnboardingPaginator data={slideData} scrollX={scrollX} />
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            console.log("button pressed");
            navigate.navigate("RegisterScreen");
          }}
        >
          <Text style={styles.signupButtonText}>I'm new to Monzo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}  
          onPress={() => {
            // console.log("button pressed");
            navigate.navigate("LoginScreen");
          }}>I already have an account</Text>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.onboardingScreen,
    height: "100%",
    paddingTop: 70,
  },
  FlatListContainer: {
    // marginBottom: 0,
    // paddingTop: 50,
    // paddingBottom: 20,
    // backgroundColor: "gray",
  },
  OnboardingPaginator: {
    zIndex: 20,
    bottom: Platform.OS === "ios" ? 170 : 190,
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
export default OnboardingScreen;
