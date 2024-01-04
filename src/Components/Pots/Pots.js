import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../Const/constStyles";

const pots = [
    {
        id : "hsjvuyg8",
        name: 'Pot 1',
        amount: "25.00",
        date: "13/07/2021",
    },
    {
        id : "hsjuyg8",
        name: 'Pot 2',
        amount: "25.00",
        date: "13/07/2021",
    }
];
const PotItem = () => {
  return (
    <>
      {pots.map((item) => {
        return (
          <View style={{...styles.potItemContainer,backgroundColor:colors.onboardingScreen}}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </>
  );
};

const Pots = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal:20,
          paddingTop:10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: 500 }}>
            Pots
          </Text>
          <Text>£ 1400</Text>
        </View>
        <Ionicons
          name="ellipsis-horizontal"
          size={23}
          color={colors.buttonColor}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "space-between",
          columnGap: 10,
        }}
      >
        <FlatList
          data={pots}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PotItem item={item} />}
          keyExtractor={(item ,index) => index.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // paddingHorizontal: 10,
    paddingBottom:15,
    backgroundColor: "white",
    borderRadius: 15,
    rowGap: 20,
  },
  potItemContainer: {
    marginHorizontal:10,
    columnGap:20,
    // backgroundColor:"red",
    padding:10,
    borderRadius:10,
    width: 130,
    height:130
  },
});
export default Pots;
