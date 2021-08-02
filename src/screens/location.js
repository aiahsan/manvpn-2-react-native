import React from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView } from 'react-native';
import Topbar from '../componentes/tools/topbar';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { Switch } from 'react-native-paper';
import LocationBar from '../componentes/tools/locationBar';
import { Style } from '../styles/appStyle';
import SearchBar from '../componentes/tools/locationSearchBar';
import { useSelector } from 'react-redux';

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
      <Topbar theme={theme} isHome={false} title='Locations' />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text
          style={[
            Style.locationHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Recomendation
        </Text>

        <LocationBar title='Singapore' icon='singa' />
        <LocationBar title='Japan' icon='japan' />
        <Text
          style={[
            Style.locationHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Free server
        </Text>
        <LocationBar title='United states' icon='us' />
        <LocationBar title='United Kingdom' icon='uk' />
        <LocationBar title='Singapore' icon='singa' />
        <Text
          style={[
            Style.locationHead,
            { color: theme == 1 ? 'white' : '#083459' },
          ]}
        >
          Favorites
        </Text>
        <LocationBar title='Belgium' isCheck={true} icon='belgium' />
        <LocationBar title='United Kingdom' isCheck={true} icon='uk' />
        <LocationBar title='Singapore' isCheck={true} icon='singa' />
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
    </LinearGradient>
  );
};
