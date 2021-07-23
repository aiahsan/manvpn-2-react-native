import React from 'react';
import { View, Text } from 'react-native';
import Icon from '../../styles/icons';
import { RadioButton } from 'react-native-paper';
import { Style } from '../../styles/appStyle';

export default ({ title, icon, isCheck }) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={Style.locationBarfelx}>
      <View style={Style.br6}>
        <Icon name={icon} />
      </View>
      <View style={Style.locationBarfelxInner}>
        <View>
          <Text style={Style.locationbartext}>{title}</Text>
        </View>
        <View style={Style.locationIconFlex}>
          <Icon name={isCheck ? 'starcheck' : 'unactivestar'} />
          <RadioButton
            color='#1C60CD'
            value='first'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
      </View>
    </View>
  );
};
