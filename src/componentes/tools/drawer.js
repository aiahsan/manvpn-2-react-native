import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from '../../styles/icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import DrawerItem from './DrawerItem';
import LogOut from './logout';
import { Nav } from '../../utiles/navigationType';
import { Style } from '../../styles/appStyle';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
export default ({ navigation }) => {
  const theme = useSelector((x) => x);

  // console.warn(props)
  return (
    <View style={Style.flex}>
      <View
        style={[
          Style.drawerTop,
          { backgroundColor: theme == 1 ? '#001F3F' : '#F6F6F6' },
          Style.shadowApp,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          style={[
            Style.drawerBack,
            {
              backgroundColor:
                theme == 1 ? 'rgba(255, 255, 255, 0.1)' : '#F6F6F6',
            },
            Style.shadowApp,
          ]}
        >
          <View>
            <Icon theme={theme} name='cross' />
          </View>
        </TouchableOpacity>
        <Text
          style={[
            Style.DrawerText,
            Style.shadowApp,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Hello, Kevin!
        </Text>
      </View>
      <View
        style={[
          Style.drawerBottom,
          { backgroundColor: theme == 1 ? '#001F3F' : '#F6F6F6' },
          Style.shadowApp,
        ]}
      >
        <ScrollView>
          <View style={Style.pl49}>
            <DrawerItem
              theme={theme}
              icon='eye1'
              title='Account Details'
              navigation={navigation}
              page={Nav.AccountDetails}
            />
            <DrawerItem
              icon='glob'
              theme={theme}
              title='Locations'
              navigation={navigation}
              page={Nav.Location}
            />
            <DrawerItem
              icon='filter'
              theme={theme}
              title='Settings'
              navigation={navigation}
              page={Nav.Settings}
            />
            <DrawerItem
              icon='clock'
              theme={theme}
              title='Split Tunneling'
              navigation={navigation}
              page={Nav.Split}
            />
            <DrawerItem
              icon='card'
              theme={theme}
              title='Support'
              navigation={navigation}
              page={Nav.Support}
            />
          </View>
          <LogOut navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};
