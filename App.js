const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FrontPage from "./screens/FrontPage";
import LapanganPanahan from "./components/LapanganPanahan";
import KostumMemanah from "./components/KostumMemanah";
import IstilahDalamOlahragaPanahan from "./components/IstilahDalamOlahragaPanahan";
import Turnamen from "./components/Turnamen";
import Poin from "./components/Poin";
import PapanSasaranPanahan from "./components/PapanSasaranPanahan";
import HalHalLainWajibDiketahuiP from "./components/HalHalLainWajibDiketahuiP";
import Home from "./screens/Home";
import PengisianSkor from "./screens/PengisianSkor";
import HomeInfoPemakaian from "./screens/HomeInfoPemakaian";
import Submit from "./components/Submit";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FrontPage"
              component={FrontPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LapanganPanahan"
              component={LapanganPanahan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KostumMemanah"
              component={KostumMemanah}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IstilahDalamOlahragaPanahan"
              component={IstilahDalamOlahragaPanahan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Turnamen"
              component={Turnamen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Poin"
              component={Poin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PapanSasaranPanahan"
              component={PapanSasaranPanahan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HalHalLainWajibDiketahuiP"
              component={HalHalLainWajibDiketahuiP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PengisianSkor"
              component={PengisianSkor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeInfoPemakaian"
              component={HomeInfoPemakaian}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Submit"
              component={Submit}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
