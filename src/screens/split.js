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
import { useSelector } from 'react-redux';

export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
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
      <Topbar theme={theme} isHome={false} title='SPLIT TUNNELING' />

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
                lineHeight: 20,
                marginTop: RFValue(37),
                color: theme == 1 ? 'white' : '#083459',
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
            style={{
              marginTop: RFValue(20),
              marginBottom: 10,
              flex: 4,
              backgroundColor:
                theme == 1 || !isSwitchOn ? 'transparent' : 'white',
              borderRadius: 25,
              paddingLeft: 20,
            }}
          >
            {isSwitchOn ? (
              <View style={{ marginBottom: RFValue(50) }}>
                <SplitAPp
                  name='PicsArt'
                  size='636 MB'
                  theme={theme}
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
                  theme={theme}
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
                  theme={theme}
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
                  theme={theme}
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
                  theme={theme}
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
              theme={theme}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
