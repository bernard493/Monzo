import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  Platform
} from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import OnboardingPaginator from "./OnboardingPaginator";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const animation = useRef(null);

  return (
    <View style={{ width }}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width,
          height: Platform.OS === "ios" ? 500 : 440,
          resizeMode: "contain",
        }}
        source={item.img}
      />
      {/* <Image
        source={item.img}
        style={[
          {
            width,
            height: 400,
            resizeMode: "contain",
          },
        ]}
      /> */}
      {/* <OnboardingPaginator/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "600",
    // paddingHorizontal:16,
    // marginHorizontal: 20,

    marginHorizontal: 20,
  },
});
export default OnboardingItem;
