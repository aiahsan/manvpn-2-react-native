import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from './src/styles/icons';
import { Nav } from './src/utiles/navigationType';
import Home from './src/screens/home';
import Login from './src/screens/login';
import SignUp from './src/screens/signup';
import Split from './src/screens/split';
import Location from './src/screens/location';
import Support from './src/screens/support';
import AccountDetails from './src/screens/accountdetails';
import Settings from './src/screens/settings';
import { RFValue } from 'react-native-responsive-fontsize';
import DrawerCom from './src/componentes/tools/drawer';
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
  const Stack = createNativeStackNavigator();
  Stack.Navigator.defaultProps = {
    headerMode: 'none',
  };

  const Drawer = createDrawerNavigator();

  const StackNav = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Nav.Login}
      >
        <Stack.Screen name={Nav.Login} component={Login} />
        <Stack.Screen name={Nav.Support} component={Support} />
        <Stack.Screen name={Nav.SignUp} component={SignUp} />
        <Stack.Screen name={Nav.Home} component={Home} />
        <Stack.Screen name={Nav.Split} component={Split} />
        <Stack.Screen name={Nav.Location} component={Location} />
        <Stack.Screen name={Nav.AccountDetails} component={AccountDetails} />
        <Stack.Screen name={Nav.Settings} component={Settings} />
      </Stack.Navigator>
    );
  };
  return (
    <>
      <StatusBar style='light' backgroundColor='#1d243e' />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ swipeEnabled: false }}
            initialRouteName='HomeD'
            drawerContent={(props) => <DrawerCom {...props} />}
            drawerStyle={{ backgroundColor: 'transparent' }}
          >
            <Drawer.Screen name='HomeD' component={StackNav} />
          </Drawer.Navigator>
        </NavigationContainer>
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
