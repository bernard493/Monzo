import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../Const/constStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

const BalanceDetail = () => {
  return (
    <View style={styles.balanceInfo}>
      <View style={styles.balanceDetails}>
        <Text style={{ fontSize: 25, color: "white", fontWeight: 800 }}>
          monzo
        </Text>
        <View style={{...styles.balanceDetails ,alignItems:"baseline"}}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: 800 }}>
            £
          </Text>
          <Text style={{ fontSize: 28, color: "white", fontWeight: 800 }}>
            4
          </Text>
          <Text style={{ fontSize: 20, color: "white", fontWeight: 800 }}>
            .82
          </Text>
        </View>
      </View>
      <View style={styles.balanceDetails}>
        <View style={{ ...styles.balanceDetails, columnGap: 5 }}>
          <Ionicons name="business" size={17} color={"#FFDCD9"} />

          <Text style={{ fontSize: 12, color: "#FFDCD9", fontWeight: 800 }}>
            44-45-51
          </Text>
          <Text style={{ fontSize: 15, color: "#FFDCD9", fontWeight: 800 }}>
            -
          </Text>
          <Text style={{ fontSize: 12, color: "#FFDCD9", fontWeight: 800 }}>
            15784541
          </Text>
        </View>
        <Text style={{ fontSize: 11, color: "#FFDCD9", fontWeight: 800 }}>
          Balance
        </Text>
      </View>
      <View style={styles.balanceDetails}>
        <View style={{ ...styles.balanceDetails, columnGap: 10 }}>
          <TouchableOpacity style={styles.balanceActionBtn}>
            <Ionicons name="add-circle" size={25} color={"white"} />

            <Text
              style={{
                ...styles.text,
                color: "white",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              Add money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.balanceActionBtn}>
            <Ionicons name="card" size={25} color={"white"} />

            <Text
              style={{
                ...styles.text,
                color: "white",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Card
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#B3413C",
            padding: 5,
            borderRadius: 100,
          }}
        >
          <Ionicons name="ellipsis-horizontal" size={23} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceInfo: {
    backgroundColor: colors.balanceBoardColor,
    borderRadius: 15,
    padding: 10,
    rowGap: 15,
  },
  balanceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceActionBtn: {
    backgroundColor: "#B3413C",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 6,
  },
});
export default BalanceDetail;
