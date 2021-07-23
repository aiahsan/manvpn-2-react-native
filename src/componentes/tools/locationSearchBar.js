import React from 'react';
import { View, TextInput } from 'react-native';
import { Style } from '../../styles/appStyle';
import Icon from '../../styles/icons';

export default () => (
  <View style={Style.searchbarFlex}>
    <Icon name='search' />
    <TextInput placeholder='Search location' style={Style.searchbarFlexInput} />
  </View>
);
