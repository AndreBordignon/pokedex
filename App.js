if (__DEV__) {
  import("./ReactotronConfig");
}
import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/Routes";
import store from "./src/redux/store";
// Importação de componente de loading do Expo
import { AppLoading } from "expo";
// Importação da biblioteca expo-font
import { useFonts } from "@use-expo/font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "sf-pro-display-bold": require("./assets/fonts/sf-pro-display-bold.ttf"),
    "sf-pro-display-medium": require("./assets/fonts/sf-pro-display-medium.ttf"),
    "sf-pro-display-regular": require("./assets/fonts/sf-pro-display-regular.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
