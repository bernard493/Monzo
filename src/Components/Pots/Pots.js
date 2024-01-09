import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../Const/constStyles";

const apiCallPots = [
  {
    id: "hsjvuyg8",
    type: "Regular",
    name: "Rent",
    amount: "250",
    date: "13/07/2021",
  },
  {
    id: "hsjuyg8",
    type: "Savings",
    name: "Savings",
    amount: "2,500",
    date: "13/07/2021",
  },
  {
    id: "hsju33yg8",
    name: "Fees",
    type: "Savings",
    amount: "2,500",
    date: "13/07/2021",
  },
];

const pots = [...apiCallPots, { id: "2345er", name: "create Pot" }];
const PotItem = ({item}) => {
  return (
    <>
      {
       item.name === "create Pot" ? (
          <TouchableOpacity
            style={{
              ...styles.potItemContainer,
              backgroundColor: colors.onboardingScreen,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="add-circle" size={20} color={colors.buttonColor} />
            <Text style={{ color: colors.buttonColor, fontWeight: "400" }}>
              Create Pot
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              ...styles.potItemContainer,
              backgroundColor: item.type === "Regular" ? "#B9F4DF" : "#FFD5ED",
            }}
          >
            <View
              style={{
                bottom: 5,
                left: 10,
                position: "absolute",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  ...styles.potInnerTextStyle,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  ...styles.potInnerTextStyle,
                }}
              >
                £{item.amount}
              </Text>
            </View>
          </TouchableOpacity>
        )
    }
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
          paddingHorizontal: 20,
          paddingTop: 10,
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
          justifyContent: "space-between",
          columnGap: 10,
        }}
      >
        <FlatList
          data={pots}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PotItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    // paddingHorizontal: 10,
    paddingBottom: 30,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 15,
    rowGap: 20,
  },
  potItemContainer: {
    marginHorizontal: 10,
    columnGap: 20,
    borderRadius: 10,
    width: 140,
    height: 140,
  },
  potInnerTextStyle: {
    fontWeight: "600",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.84,

    elevation: 5,
  },
});
export default Pots;
