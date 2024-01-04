import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStacks from "./AppStacks";
import AuthStacks from "./AuthStacks";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setUser,
  addUserToken,
} from "../Redux_State/features/userAuthSlice";

const AppNavigate = () => {
  const { user, loading, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getSavedUserData = async () => {
    // const UserData = await SecureStore.getItemAsync("UserData");

    // if (UserData) {
    //   const { token, user } = JSON.parse(UserData);
    //   dispatch(setUser({ token, user }));
    // }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (!userToken) {
      getSavedUserData();
    }
  }, []);

  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {!loading && (
        <NavigationContainer>
          {user ? <AppStacks /> : <AuthStacks />}
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AppNavigate;
