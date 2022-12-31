/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";

import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import AccountStack from "./src/container/AccounstStack/AccountStack";
//////////////////////////////////////////redux imports//////////////////////////////////////////
import { connect } from "react-redux";
import { isLoggedInSelector } from "./src/redux/selectors/isLoggedIn.selector";
import { createStructuredSelector } from "reselect";

/////////////////////////////////////////////////////////////////////////////////////////////////
import BottomTab from "./src/container/bottomTab/bottomTab";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = (props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {!props.isLoggedIn.isLoggedIn ? (
          <AccountStack></AccountStack>
        ) : (
          <BottomTab></BottomTab>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: isLoggedInSelector,
});

export default connect(mapStateToProps)(App);
