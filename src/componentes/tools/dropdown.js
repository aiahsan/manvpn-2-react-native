import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';
import { Style } from '../../styles/appStyle';
import Icon from '../../styles/icons';
function App({ items, label, theme, onPress }) {
  return (
    <SelectDropdown
      data={items ? items : []}
      onSelect={(x) => (onPress ? onPress(x) : alert(x))}
      buttonStyle={Style.buttonStyle}
      buttonTextStyle={[
        Style.buttonTextStyle,
        { color: theme == 1 ? 'white' : '#083459' },
      ]}
      defaultButtonText={label}
      renderDropdownIcon={() => (
        <>
          <Icon theme={theme} name='chevdown' />
        </>
      )}
      rowStyle={Style.rowStyle}
      dropdownStyle={[
        Style.dropdownStyle,
        { backgroundColor: theme == 1 ? '#083459' : 'white' },
      ]}
      rowTextStyle={{}}
      renderCustomizedRowChild={(x) => (
        <>
          <Text
            style={[
              Style.renderCustomizedRowChild,
              { color: theme == 1 ? 'white' : '#083459' },
            ]}
          >
            {x}
          </Text>
        </>
      )}
    />
  );
}
export default App;
