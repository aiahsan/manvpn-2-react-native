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

const SettingRow = ({ title, value }) => {
  return (
    <View style={Style.settingRow}>
      <Text style={Style.settingRowTitle}>{title}</Text>
      <Text style={Style.settingRowItem}>{value}</Text>
    </View>
  );
};
export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <LinearGradient
      style={Style.linerGrediantStyle}
      colors={['#083459', '#1D243E']}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar isHome={false} title='Account Details' />
      <ScrollView style={{ flex: 1 }}>
        <Text style={Style.settingRowHead}>Account Details</Text>

        <SettingRow title='Full Name' value='Your Full Name' />
        <SettingRow title='Email Id' value='example@mail.com' />
        <SettingRow title='Active Devices' value='1/10' />
        <CustomButton label='Edit' />
      </ScrollView>
    </LinearGradient>
  );
};
