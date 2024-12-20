import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../Screens/LoginScreen";
import Navigation from "../../Navigations";
import test from "../../test";
import test2 from "../../test2"; 


// Stack
const OnboardingStack = createNativeStackNavigator();

function MyOnboarding() {
  return (
    <OnboardingStack.Navigator initialRouteName="testing">
      <OnboardingStack.Screen name="testing" component={test} />
      <OnboardingStack.Screen name="Welcome" component={LoginScreen} />
      <OnboardingStack.Screen options={{
        headerShown:false
      }} name="Hanchat" component={Navigation} />
      <OnboardingStack.Screen name="testing2" component={test2} />
    </OnboardingStack.Navigator>
  );
}

export default function Onboarding() {
  return <MyOnboarding />;
}
