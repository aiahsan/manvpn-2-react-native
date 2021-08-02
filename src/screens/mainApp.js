import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '../styles/icons';
import { StatusBar } from 'expo-status-bar';

import { Nav } from '../utiles/navigationType';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Split from '../screens/split';
import Location from '../screens/location';
import Support from '../screens/support';
import AccountDetails from '../screens/accountdetails';
import Settings from '../screens/settings';
import { RFValue } from 'react-native-responsive-fontsize';
import DrawerCom from '../componentes/tools/drawer';
import { useSelector } from 'react-redux';

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
export default () => {
  const theme = useSelector((x) => x);

  return (
    <>
      <StatusBar
        style='light'
        backgroundColor={theme == 1 ? '#1d243e' : '#E5E5E5'}
      />

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
    </>
  );
};
