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

export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <LinearGradient
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      colors={['#083459', '#1D243E']}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar isHome={false} title='Support' />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='support' />
          <Text
            style={{
              fontFamily: 'GilroySemiBold',
              fontSize: RFValue(22),
              lineHeight: RFValue(27),
              marginTop: RFValue(57),
              color: 'white',
              marginBottom: RFValue(20),
            }}
          >
            How can we help you?
          </Text>
          <Text
            style={{
              fontFamily: 'GilroyRegular',
              fontSize: RFValue(16),
              textAlign: 'center',
              maxWidth: RFValue(330),
              color: 'white',
              lineHeight: 20,
            }}
          >
            It looks like you are experiencing problems with our app. We are
            here to help so please get in touch with us
          </Text>

          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: 270,
              flexDirection: 'row',
              marginTop: RFValue(66),
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: RFValue(122),
                backgroundColor: '#FFFFFF',
                height: RFValue(127),
              }}
            >
              <Image
                source={require('../images/chat.png')}
                style={{ width: 36, height: 36 }}
              />
              <Text
                style={{
                  fontFamily: 'GilroySemiBold',
                  fontSize: RFValue(16),
                  marginTop: RFValue(16),
                  color: '#083459',
                  lineHeight: RFValue(19),
                }}
              >
                Chat to us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                width: RFValue(122),
                backgroundColor: '#FFFFFF',
                height: RFValue(127),
              }}
            >
              <Image
                source={require('../images/email.png')}
                style={{ width: 36, height: 36 }}
              />
              <Text
                style={{
                  fontFamily: 'GilroySemiBold',
                  fontSize: RFValue(16),
                  marginTop: RFValue(16),
                  color: '#083459',
                  lineHeight: RFValue(19),
                }}
              >
                Email Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: RFValue(100) }}></View>
      </ScrollView>
    </LinearGradient>
  );
};
