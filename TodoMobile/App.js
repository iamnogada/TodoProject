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

// const theme1 = createTheme({
//   lightColors: {
//     ...Platform.select({
//       default: lightColors.platform.android,
//       ios: lightColors.platform.ios,
//     }),
//   },
// });

export default function App() {
  return (
    
      <SafeAreaProvider>
        <NavigationContainer
        >
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
    backgroundColor: "#eee",
  },
});
