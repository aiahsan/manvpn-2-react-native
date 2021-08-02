import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../utiles/navigationType';
export default ({ name, ip, theme }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate(Nav.Location)}
        style={[
          Style.centerButton,
          { backgroundColor: theme == 1 ? 'rgb(52, 59, 82)' : '#1C60CD' },
        ]}
      >
        <Icon name='indo' />
        <Text style={Style.centerButtonText}>{name}</Text>
        <Icon name='chevRight' />
      </TouchableOpacity>
      <Text style={[Style.ipText, { color: theme == 1 ? 'white' : '#083459' }]}>
        IP {ip}
      </Text>
    </>
  );
};
