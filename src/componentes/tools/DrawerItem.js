import React from 'react';
import { Nav } from '../../utiles/navigationType';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
export default ({ icon, title, navigation, page, theme }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      style={Style.drawerItem}
    >
      <Icon theme={theme} name={icon} />
      <Text
        style={[
          Style.drawerItemText,
          { color: theme == 1 ? 'white' : '#083459' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
