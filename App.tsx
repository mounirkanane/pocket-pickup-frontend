import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/HomeScreen";
import LogInScreen from "./app/screens/LogInScreen";
import EventCreationScreen from "./app/screens/EventCreationScreen";
import EventDetailsScreen from "./app/screens/EventDetailsScreen";
import PlaceEventScreen from "./app/screens/PlaceEventScreen";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlaceEvent">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LogInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="EventDetails"
            component={EventDetailsScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PlaceEvent"
            component={PlaceEventScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: "CreateEvent",
              headerTitleStyle: { fontWeight: "900", fontSize: 28 },
            }}
            name="CreateEvent"
            component={EventCreationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
