import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../utiles/navigationType';

export default ({ name, ip }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate(Nav.Location)}
        style={Style.centerButton}
      >
        <Icon name='indo' />
        <Text style={Style.centerButtonText}>{name}</Text>
        <Icon name='chevRight' />
      </TouchableOpacity>
      <Text style={Style.ipText}>IP {ip}</Text>
    </>
  );
};
