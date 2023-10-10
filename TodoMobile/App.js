import { StyleSheet } from "react-native";

import {
  SafeAreaProvider
} from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./src/pages/Home";
import Setting from "./src/pages/Setting";
import Todo from "./src/pages/Todo";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    
      <SafeAreaProvider>
        <NavigationContainer
        >
          <BottomTab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "#cbd5e1",
              tabBarStyle: {
                backgroundColor: "#2563eb",
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
                height: 90,
                paddingTop: 10,
              },
              tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: "bold",
              },
              headerStyle: {
                backgroundColor: "#2563eb",
                height: 100,
              },
              headerTintColor:"#fff",
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
              },
            }}
          >
            <BottomTab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
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
    backgroundColor: "#e5e7eb",
  },
});
