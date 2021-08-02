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
import { useSelector, useDispatch } from 'react-redux';
import {
  changeThemeLight,
  changeThemeDark,
} from '../redux/actions/userActionMethodes';
const SettingRow = ({ title, comp, theme }) => {
  return (
    <View
      style={[
        Style.settingRowStyle,
        { borderBottomColor: theme == 1 ? 'white' : 'rgba(8, 52, 89, 0.5)' },
      ]}
    >
      <Text
        style={[
          Style.settingRowTextStyle,
          { color: theme == 1 ? 'white' : '#083459' },
        ]}
      >
        {title}
      </Text>
      {comp ? comp() : <></>}
    </View>
  );
};
export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const Automatic = ['PPTP', 'IPSec', 'OpenVPN', 'IKEV2'];
  const Theme = ['Default', 'Dark', 'Light'];
  const theme = useSelector((x) => x);
  const dispatch = useDispatch();
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

  const onPressdropdown = (type) => {
    if (type == 'Light') {
      dispatch(changeThemeLight());
    } else {
      dispatch(changeThemeDark());
    }
  };
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
      <Topbar theme={theme} isHome={false} title='Settings' />
      <ScrollView
        nestedScrollEnabled={true}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[
            Style.settingAppHead1,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Settings
        </Text>

        <SettingRow
          theme={theme}
          title='VPN Protocols'
          comp={() => (
            <Dropdown theme={theme} label='Automatic' items={Automatic} />
          )}
        />
        <SettingRow
          title='Kill Switch'
          theme={theme}
          comp={() => (
            <Switch
              color={theme == 1 ? '#12a3cc' : '#083459'}
              value={statess[0]}
              onValueChange={() => handleSetSwitch(0)}
            />
          )}
        />
        <SettingRow
          title='Disable IPv6'
          theme={theme}
          comp={() => (
            <Switch
              color={theme == 1 ? '#12a3cc' : '#083459'}
              value={statess[1]}
              onValueChange={() => handleSetSwitch(1)}
            />
          )}
        />

        <Text
          style={[
            Style.settingAppHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          App Settings
        </Text>

        <SettingRow
          theme={theme}
          title='Save Login'
          comp={() => (
            <Switch
              color={theme == 1 ? '#12a3cc' : '#083459'}
              value={statess[2]}
              onValueChange={() => handleSetSwitch(2)}
            />
          )}
        />
        <SettingRow
          theme={theme}
          title='Auto Connect'
          comp={() => (
            <Switch
              color={theme == 1 ? '#12a3cc' : '#083459'}
              value={statess[3]}
              onValueChange={() => handleSetSwitch(3)}
            />
          )}
        />
        <SettingRow
          theme={theme}
          title='Auto Launch'
          comp={() => (
            <Switch
              color={theme == 1 ? '#12a3cc' : '#083459'}
              value={statess[4]}
              onValueChange={() => handleSetSwitch(4)}
            />
          )}
        />

        <Text
          style={[
            Style.settingAppHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          THEME
        </Text>

        <View>
          <SettingRow
            theme={theme}
            title='Select Theme'
            comp={() => (
              <Dropdown
                theme={theme}
                onPress={onPressdropdown}
                label='Dark'
                items={Theme}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 220 }}></View>
      </ScrollView>
    </LinearGradient>
  );
};
