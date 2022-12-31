/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store/store";
import "react-native-gesture-handler";

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
