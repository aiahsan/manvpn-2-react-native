import React from 'react';
import { Nav } from '../../utiles/navigationType';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
export default ({ icon, title, navigation, page }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      style={Style.drawerItem}
    >
      <Icon name={icon} />
      <Text style={Style.drawerItemText}>{title}</Text>
    </TouchableOpacity>
  );
};
