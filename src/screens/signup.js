import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles, Style } from '../styles/appStyle';
import CustomTextInput from '../componentes/tools/textinput';
import CustomButton from '../componentes/tools/button';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Nav } from '../utiles/navigationType';
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation();
  const theme = useSelector((x) => x);

  return (
    <>
      <ImageBackground
        source={
          theme == 1
            ? require('../images/bg1.png')
            : require('../images/bg2.png')
        }
        style={[Style.flexTheme, Style.background, {}]}
        imageStyle={{}}
      >
        <ScrollView>
          <View style={Style.loginFlex}>
            <Image
              style={Style.logo}
              source={
                theme == 1
                  ? require('../images/logo.png')
                  : require('../images/logo2.png')
              }
            />
            <Text
              style={[Style.title, { color: theme == 1 ? 'white' : '#083459' }]}
            >
              Create New Account
            </Text>
            <Text
              style={[Style.desc, { color: theme == 1 ? 'white' : '#083459' }]}
            >
              Please fill the form to continue
            </Text>
            <CustomTextInput
              name='user'
              placeholder='Full Name'
              ispassword={false}
              theme={theme}
            />
            <CustomTextInput
              name='email'
              placeholder='Email'
              ispassword={false}
              theme={theme}
            />
            <CustomTextInput
              name='key'
              placeholder='Password'
              ispassword={true}
              theme={theme}
            />

            <CustomButton label='Sign Up' />
            <TouchableOpacity
              onPress={() => navigation.navigate(Nav.Login)}
              style={{ marginTop: RFPercentage(8) }}
            >
              <Text
                style={[
                  Style.haveanaccount,
                  ,
                  { color: theme == 1 ? 'white' : '#083459' },
                ]}
              >
                Already Have an account?
                <Text
                  style={[
                    Style.signuptext,
                    ,
                    { color: theme == 1 ? 'white' : '#083459' },
                  ]}
                >
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
