import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Setting from "./pages/Setting";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            inactiveTintColor: "orange",
            backgroundColor: "#orange",
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "blue",
            tabBarStyle: {
              backgroundColor: "#eee",
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              height: 80,
            },
            tabBarLabelStyle: {
              fontSize: 15,
            },
            headerStyle: {
              backgroundColor: "orange",
              height: 100,
            },
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Todo"
            component={Todo}
            options={{
              tabBarLabel: "Todo",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="format-list-checkbox"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarLabel: "Setting",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  
});
