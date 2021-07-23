import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from '../../styles/icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import DrawerItem from './DrawerItem';
import LogOut from './logout';
import { Nav } from '../../utiles/navigationType';
import { Style } from '../../styles/appStyle';

export default ({ navigation }) => {
  // console.warn(props)
  return (
    <View style={Style.flex}>
      <View style={Style.drawerTop}>
        <TouchableOpacity style={Style.drawerBack}>
          <View>
            <Icon name='cross' />
          </View>
        </TouchableOpacity>
        <Text style={Style.DrawerText}>Hello, Kevin!</Text>
      </View>
      <View style={Style.drawerBottom}>
        <ScrollView>
          <View style={Style.pl49}>
            <DrawerItem
              icon='eye1'
              title='Account Details'
              navigation={navigation}
              page={Nav.AccountDetails}
            />
            <DrawerItem
              icon='glob'
              title='Locations'
              navigation={navigation}
              page={Nav.Location}
            />
            <DrawerItem
              icon='filter'
              title='Settings'
              navigation={navigation}
              page={Nav.Settings}
            />
            <DrawerItem
              icon='clock'
              title='Split Tunneling'
              navigation={navigation}
              page={Nav.Split}
            />
            <DrawerItem
              icon='card'
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
