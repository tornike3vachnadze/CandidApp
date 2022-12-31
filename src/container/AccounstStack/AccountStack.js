import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Tabs/profile/profileScreen";

import SignUp from "./AcccountStackScreens/SignUp";
import Login from "./AcccountStackScreens/Login";
import Passcode from "./AcccountStackScreens/Passcode";
import PrivacyAndTerms from "./AcccountStackScreens/PrivacyAndTerms/PrivacyAndTerms";
import UserInfo from "./AcccountStackScreens/UserInfo";
import Categories from "./AcccountStackScreens/Categories";
import VideoBio from "./AcccountStackScreens/VideoBio";
import VideoSample from "./AcccountStackScreens/VideoSample";
import RecordBio from "./AcccountStackScreens/RecordBio";
const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="Login"
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="SignUp"
        component={SignUp}
      ></Stack.Screen>

      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="Passcode"
        component={Passcode}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="PrivacyAndTerms"
        component={PrivacyAndTerms}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="UserInfo"
        component={UserInfo}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="Categories"
        component={Categories}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="VideoBio"
        component={VideoBio}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="VideoSample"
        component={VideoSample}
      ></Stack.Screen>
      <Stack.Screen
        options={{ title: "", headerShown: false }}
        name="RecordBio"
        component={RecordBio}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountStack;
