import {
  StyleSheet,
  BackHandler,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./Screens/StoryScreen/Feed";
import Liked from "./Screens/StoryScreen/Liked";
import Update from "./Screens/StoryScreen/Update";
import Chat from "./Screens/Chat";
import Settings from "./Screens/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

// Stack
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
}

//Material TopTabBar
const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TopTab.Navigator screenOptions={{
      //tabBarLabelStyle: { fontSize: 12 },
      //tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: '#00009c' }
    }}>
      <TopTab.Screen name="Feed" component={Feed} />
      <TopTab.Screen name="Update" component={Update} />
      <TopTab.Screen name="Liked" component={Liked} />
    </TopTab.Navigator>
  );
}

// Button Tab
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#00009c' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconsize;

          if (route.name === "Stories") {
            iconName = focused ? "history" : "home-outline";
            iconsize = focused ? 35 : 20;
            return <FontAwesome name="history" size={iconsize} color="white" />;
          } else if (route.name === "Chat") {
            iconName = focused ? "chat" : "chat-outline";
            iconsize = focused ? 35 : 20;
            return <Entypo name="chat" size={iconsize} color="white" />;
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            iconsize = focused ? 35 : 20;
            return <Ionicons name={iconName} size={iconsize} color="white" />;
          }
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{
          headerShown: true,
        }}
        name="Stories"
        component={MyTopTabs}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigations() {

  useEffect(() => {
    const backAction = () => {
      // Show a toast message
      ToastAndroid.show("Exiting app", ToastAndroid.SHORT);
      // Exit the app
      BackHandler.exitApp();
      return true; // Prevent default behavior
    };

    // Add back button event listener
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup on unmount
  }, []);

  return <MyTabs />;
}

// Styles
const styles = StyleSheet.create({});
