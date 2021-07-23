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
      <Topbar isHome={false} title='Locations' />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={Style.locationHead}>Recomendation</Text>

        <LocationBar title='Singapore' icon='singa' />
        <LocationBar title='Japan' icon='japan' />
        <Text style={Style.locationHead}>Free server</Text>
        <LocationBar title='United states' icon='us' />
        <LocationBar title='United Kingdom' icon='uk' />
        <LocationBar title='Singapore' icon='singa' />
        <Text style={Style.locationHead}>Favorites</Text>
        <LocationBar title='Belgium' isCheck={true} icon='belgium' />
        <LocationBar title='United Kingdom' isCheck={true} icon='uk' />
        <LocationBar title='Singapore' isCheck={true} icon='singa' />
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
    </LinearGradient>
  );
};
