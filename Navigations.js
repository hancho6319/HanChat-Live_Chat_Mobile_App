import * as React from "react";
import { StyleSheet } from "react-native";
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
import { blue } from "react-native-reanimated/lib/typescript/Colors";

// Stack
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    options={{
      color: blue,
    }} 
    >
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
}

//Material TopTabBar
const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TopTab.Navigator>
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconsize;

          if (route.name === "Stories") {
            iconName = focused ? "history" : "home-outline";
            iconsize = focused ? 35 : 20;
            return <FontAwesome name="history" size={iconsize} color="black" />;
          } else if (route.name === "Chat") {
            iconName = focused ? "chat" : "chat-outline";
            iconsize = focused ? 35 : 20;
            return <Entypo name="chat" size={iconsize} color="black" />;
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            iconsize = focused ? 35 : 20;
            return <Ionicons name={iconName} size={iconsize} color="black" />;
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
  return <MyTabs />;
}

// Styles
const styles = StyleSheet.create({});
