import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import MainApp from './src/screens/mainApp';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#139fca',

    accent: '#1D243E',
    placeholder: '#c4c2c2',
    text: 'white',
  },
};
enableScreens();

export default function App() {
  //  let [page,setPage]= React.useState({});

  const [loaded] = Font.useFonts({
    GilroySemiBold: require('./src/fonts/vpn/Gilroy-SemiBold.ttf'),
    GilroyRegular: require('./src/fonts/vpn/Gilroy-Regular.ttf'),
    GilroyLight: require('./src/fonts/vpn/Gilroy-Light.ttf'),
    MontserratBold: require('./src/fonts/vpn/Montserrat-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <MainApp />
        </Provider>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
