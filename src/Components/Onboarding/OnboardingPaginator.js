import { View, Animated, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import colors from "../../Const/constStyles";
const OnboardingPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((data, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              { width: dotWidth, opacity, backgroundColor:colors.buttonColor },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop:20
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});

export default OnboardingPaginator;
