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
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import CustomButton from '../componentes/tools/button';
import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from '../componentes/tools/dropdown';
import { Style } from '../styles/appStyle';
const SettingRow = ({ title, comp }) => {
  return (
    <View style={Style.settingRowStyle}>
      <Text style={Style.settingRowTextStyle}>{title}</Text>
      {comp ? comp() : <></>}
    </View>
  );
};
export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const Automatic = ['PPTP', 'IPSec', 'OpenVPN', 'IKEV2'];
  const Theme = ['Default', 'Dark', 'Light'];
  const [statess, setstates] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleSetSwitch = (index) => {
    statess[index] = !statess[index];

    setstates([...statess]);
  };
  return (
    <LinearGradient
      style={Style.linerGrediantStyle}
      colors={['#083459', '#1D243E']}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar isHome={false} title='Settings' />
      <ScrollView
        nestedScrollEnabled={true}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={Style.settingAppHead1}>Settings</Text>

        <SettingRow
          title='VPN Protocols'
          comp={() => <Dropdown label='Automatic' items={Automatic} />}
        />
        <SettingRow
          title='Kill Switch'
          comp={() => (
            <Switch
              color='#12a3cc'
              value={statess[0]}
              onValueChange={() => handleSetSwitch(0)}
            />
          )}
        />
        <SettingRow
          title='Disable IPv6'
          comp={() => (
            <Switch
              color='#12a3cc'
              value={statess[1]}
              onValueChange={() => handleSetSwitch(1)}
            />
          )}
        />

        <Text style={Style.settingAppHead}>App Settings</Text>

        <SettingRow
          title='Save Login'
          comp={() => (
            <Switch
              color='#12a3cc'
              value={statess[2]}
              onValueChange={() => handleSetSwitch(2)}
            />
          )}
        />
        <SettingRow
          title='Auto Connect'
          comp={() => (
            <Switch
              color='#12a3cc'
              value={statess[3]}
              onValueChange={() => handleSetSwitch(3)}
            />
          )}
        />
        <SettingRow
          title='Auto Launch'
          comp={() => (
            <Switch
              color='#12a3cc'
              value={statess[4]}
              onValueChange={() => handleSetSwitch(4)}
            />
          )}
        />

        <Text style={Style.settingAppHead}>THEME</Text>

        <View>
          <SettingRow
            title='Select Theme'
            comp={() => <Dropdown label='Dark' items={Theme} />}
          />
        </View>

        <View style={{ marginTop: 220 }}></View>
      </ScrollView>
    </LinearGradient>
  );
};
