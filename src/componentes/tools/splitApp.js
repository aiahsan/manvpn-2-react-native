import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Style } from '../../styles/appStyle';
import Icon from '../../styles/icons';
export default ({ icon, name, size, theme }) => {
  return (
    <TouchableOpacity style={[Style.splitAppbox, { paddingRight: 20 }]}>
      <View style={Style.splitAppboxInner}>
        <View>{icon ? icon() : <></>}</View>
        <View style={Style.ml10}>
          <Text
            style={[
              Style.splitName,
              { color: theme == 1 ? 'white' : '#083459' },
            ]}
          >
            {name}
          </Text>
          <Text style={Style.splitSize}>{size}</Text>
        </View>
      </View>
      <View>
        <Icon name='rt' />
      </View>
    </TouchableOpacity>
  );
};
