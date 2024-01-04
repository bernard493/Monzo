import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigate from "./src/StackNavigation/AppNavigate";
import { Provider } from "react-redux";
import { store } from "./src/Redux_State/store";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigate />
      </NativeBaseProvider>
    </Provider>
  );
}
