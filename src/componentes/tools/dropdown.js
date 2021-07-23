import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';
import { Style } from '../../styles/appStyle';
import Icon from '../../styles/icons';
function App({ items, label }) {
  return (
    <SelectDropdown
      data={items ? items : []}
      onSelect={(x) => alert(x)}
      buttonStyle={Style.buttonStyle}
      buttonTextStyle={Style.buttonTextStyle}
      defaultButtonText={label}
      renderDropdownIcon={() => (
        <>
          <Icon name='chevdown' />
        </>
      )}
      rowStyle={Style.rowStyle}
      dropdownStyle={Style.dropdownStyle}
      rowTextStyle={{}}
      renderCustomizedRowChild={(x) => (
        <>
          <Text style={Style.renderCustomizedRowChild}>{x}</Text>
        </>
      )}
    />
  );
}
export default App;
