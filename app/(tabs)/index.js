import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../../Onboarding/welcome";
import LoginScreen from "../../Onboarding/LoginScreen";
import Navigation from "../../Navigations";

// Stack
const OnboardingStack = createNativeStackNavigator();

function MyOnboarding() {
  return (
    <OnboardingStack.Navigator initialRouteName="Welcome">
      <OnboardingStack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={Welcome}
      />
      <OnboardingStack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <OnboardingStack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Hanchat"
        component={Navigation}
      />
    </OnboardingStack.Navigator>
  );
}

export default function Onboarding() {
  return <MyOnboarding />;
}
