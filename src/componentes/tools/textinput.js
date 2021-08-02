import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
const Width = Dimensions.get('window').width;
const CustomTextInput = ({ placeholder, name, ispassword, theme }) => {
  const [value, setvalue] = React.useState('');
  const [isSecure, setisSecure] = React.useState(false);
  React.useEffect(() => {
    if (ispassword == true) {
      setisSecure(true);
    }
  }, []);
  return (
    <View
      style={[
        Style.textInput,
        { borderColor: theme == 1 ? 'white' : '#083459' },
      ]}
    >
      <View
        style={[
          Style.textInputIcon,
          { backgroundColor: theme == 1 ? 'white' : '#1C60CD' },
        ]}
      >
        <Icon theme={theme} name={name} />
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setvalue(text)}
        style={[
          {
            width: ispassword == true ? Width - 150 : Width - 150,
            fontFamily: value.length == 0 ? 'GilroyLight' : 'GilroyRegular',
            marginLeft: RFValue(55.12),
          },
          Style.textInputInput,
          { color: theme == 1 ? 'white' : '#083459' },
        ]}
        placeholderTextColor={
          theme == 1 ? 'rgba(255, 255, 255, 0.7)' : '#083459'
        }
        secureTextEntry={isSecure}
      />
      {ispassword == true ? (
        <TouchableOpacity onPress={() => setisSecure(!isSecure)}>
          <Icon theme={theme} name='eye' />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomTextInput;
