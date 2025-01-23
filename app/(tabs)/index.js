import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../../Onboarding/welcome";
import SignIn from "../../Onboarding/SignInScreen";
import SignUp from "../../Onboarding/SignUp";
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
        name="SignIn Screen"
        component={SignIn}
      />
      <OnboardingStack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Sign Up"
        component={SignUp}
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
