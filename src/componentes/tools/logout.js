import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Nav } from '../../utiles/navigationType';
import { Style } from '../../styles/appStyle';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
export default ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Nav.Login)}
      style={[Style.button, Style.logOutButton]}
    >
      <View style={{ width: '40%' }}></View>
      <View style={Style.logOutInner}>
        <Text style={[Style.buttonLabel, Style.logoutText]}>Logout</Text>
        <Icon name='logout' />
      </View>
    </TouchableOpacity>
  );
};
