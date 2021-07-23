import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import Topbar from '../componentes/tools/topbar';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { Switch } from 'react-native-paper';
import ToggleSwitch from '../componentes/tools/switch';
import { ScrollView } from 'react-native-gesture-handler';
import SplitAPp from '../componentes/tools/splitApp';
import { Style } from '../styles/appStyle';

export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <LinearGradient
      style={Style.linerGrediantStyle}
      colors={['#083459', '#1D243E']}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar isHome={false} title='SPLIT TUNNELING' />

      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              width: RFValue(108),
              height: RFValue(108),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name='file' />
          </View>
          {isSwitchOn == false ? (
            <Text
              style={{
                fontFamily: 'GilroyRegular',
                fontSize: RFValue(16),
                textAlign: 'center',
                maxWidth: RFValue(280),
                color: 'white',
                lineHeight: 20,
                marginTop: RFValue(37),
              }}
            >
              When Split-Tunneling is enabled, only the selected apps wll use
              your VPN Ip, All other will use your actual IP(your actual
              location).
            </Text>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: RFValue(isSwitchOn == true ? 25 : 82),
            alignItems: 'center',
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingTop: RFValue(20), marginBottom: 10, flex: 4 }}
          >
            {isSwitchOn ? (
              <View style={{ marginBottom: RFValue(50) }}>
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  icon={() => (
                    <Image
                      source={require('../images/p1.png')}
                      style={{ width: 45, height: 45 }}
                    />
                  )}
                />
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  icon={() => (
                    <Image
                      source={require('../images/p1.png')}
                      style={{ width: 45, height: 45 }}
                    />
                  )}
                />
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  icon={() => (
                    <Image
                      source={require('../images/p1.png')}
                      style={{ width: 45, height: 45 }}
                    />
                  )}
                />
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  icon={() => (
                    <Image
                      source={require('../images/p1.png')}
                      style={{ width: 45, height: 45 }}
                    />
                  )}
                />
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  icon={() => (
                    <Image
                      source={require('../images/p1.png')}
                      style={{ width: 45, height: 45 }}
                    />
                  )}
                />
              </View>
            ) : (
              <></>
            )}
          </ScrollView>
          <View style={{ flex: 0.5, position: 'relative', top: RFValue(40) }}>
            <ToggleSwitch
              isOn={isSwitchOn}
              onColor='transparent'
              offColor='transparent'
              labelStyle={{ color: 'black', fontWeight: '900' }}
              size='large'
              onToggle={(isOn) => setIsSwitchOn(isOn)}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
