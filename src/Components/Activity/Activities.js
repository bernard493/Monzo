import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "native-base";

const transactions = [
  {
    name: "Bernard Ayamboro",
    amount: "25.00",
    date: "13/07/2021",
    type: "Credit",
    image:
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    details: "Monzo-DHLQL",
  },
  {
    name: "PayPal",
    amount: "5.00",
    date: "13/23/2023",
    type: "Debit",
    image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    details: "SKJNIB898IY783",
  },
  {
    name: "Personal Account",
    amount: "225.00",
    date: "13/07/2021",
    type: "Credit",
    image:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    details: "from savings",
  },
  {
    name: "Transport for London",
    amount: "2.00",
    date: "13/07/2021",
    type: "Credit",
    // image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

    details: "Travel charge for friday,29 Dec",
  },
];
const ActivityCard = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction, index) => {
        const amount = transaction.amount.split(".");
        const transactionName = transaction.name.split(" ")
        const firstChar = transactionName[0].charAt(0)
        const secondChar= transactionName[1]?.charAt(0)
      
        return (
          <TouchableOpacity key={index.toString()}>
            <View style={styles.balanceDetails}>
              <View style={{ ...styles.balanceDetails, columnGap: 20 }}>
                <Avatar
                  // bg="green.500"
                  size={"md"}
                  // borderWidth="2"
                  // w="" h="50"
                  // borderRadius="none"
                  source={{
                    uri: transaction?.image,
                  }}
                >
                  {firstChar}
                </Avatar>
               
                <View>
                  <Text style={{ fontSize: 16, color: "#3D3B40" }}>
                    {transaction.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    {transaction.details}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: transaction.type == "Credit" ? "#65B741" : "#10212F",
                    fontWeight: 500,
                  }}
                >
                  {transaction.type == "Credit" && "+"}
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    color: transaction.type == "Credit" ? "#65B741" : "#10212F",
                    fontWeight: 500,
                  }}
                >
                  {amount[0]}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: transaction.type == "Credit" ? "#65B741" : "#10212F",
                    fontWeight: 500,
                  }}
                >
                  .{amount[1]}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingTop: 5,
                borderBottomWidth: 0.3,
                borderBottomColor: "#A9A9A9",
                width: "100%",
              }}
            />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

const Activities = () => {
  return (
    <View style={styles.main}>
      <Text style={{ color: "black", fontSize: 15, fontWeight: 500 }}>
        Activity
      </Text>
      <ActivityCard transactions={transactions} />
      <TouchableOpacity>
        <Text style={{ color: "#4EB3D7", fontSize: 15, fontWeight: 500 }}>
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 15,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 15,
    rowGap: 20,
  },
  transactionLogo: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  balanceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Activities;
