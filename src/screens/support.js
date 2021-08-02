import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Topbar from '../componentes/tools/topbar';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { Switch } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { useSelector } from 'react-redux';

const Width = Dimensions.get('screen').width;
export default () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const theme = useSelector((x) => x);

  return (
    <LinearGradient
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      colors={[
        theme == 1 ? '#083459' : '#E5E5E5',
        theme == 1 ? '#1D243E' : '#E5E5E5',
      ]}
      start={{ x: 1, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
    >
      <Topbar theme={theme} isHome={false} title='Support' />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Icon theme={theme} name='support' />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'GilroySemiBold',
              fontSize: RFValue(22),
              lineHeight: RFValue(27),
              marginTop: RFValue(0),
              color: theme == 1 ? 'white' : '#083459',
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
              color: theme == 1 ? 'white' : '#083459',
              lineHeight: 20,
            }}
          >
            It looks like you are experiencing problems with our app. We are
            here to help so please get in touch with us
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: RFValue(10),
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                width: RFValue(122),
                marginRight: 20,
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
      </View>
    </LinearGradient>
  );
};
