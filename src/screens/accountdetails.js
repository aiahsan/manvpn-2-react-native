import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Topbar from '../componentes/tools/topbar';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import CustomButton from '../componentes/tools/button';
import { Style } from '../styles/appStyle';
import { useSelector } from 'react-redux';

const SettingRow = ({ title, value, theme }) => {
  return (
    <View
      style={[
        Style.settingRow,
        { borderBottomColor: theme == 1 ? 'white' : '#083459' },
      ]}
    >
      <Text
        style={[
          Style.settingRowTitle,
          { color: theme == 1 ? 'white' : '#083459' },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          Style.settingRowItem,
          { color: theme == 1 ? 'white' : '#083459' },
        ]}
      >
        {value}
      </Text>
    </View>
  );
};
export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const theme = useSelector((x) => x);

  return (
    <LinearGradient
      style={Style.linerGrediantStyle}
      colors={[
        theme == 1 ? '#083459' : '#E5E5E5',
        theme == 1 ? '#1D243E' : '#E5E5E5',
      ]}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar isHome={false} title='Account Details' />
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={[
            Style.settingRowHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Account Details
        </Text>

        <SettingRow theme={theme} title='Full Name' value='Your Full Name' />
        <SettingRow theme={theme} title='Email Id' value='example@mail.com' />
        <SettingRow theme={theme} title='Active Devices' value='1/10' />
        <CustomButton label='Edit' />
      </ScrollView>
    </LinearGradient>
  );
};
