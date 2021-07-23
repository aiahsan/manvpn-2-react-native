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

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        source={require('../images/bg1.png')}
        style={[Style.flexTheme, Style.background]}
        imageStyle={{}}
      >
        <ScrollView>
          <View style={Style.loginFlex}>
            <Image style={Style.logo} source={require('../images/logo.png')} />
            <Text style={Style.title}>Create New Account</Text>
            <Text style={Style.desc}>Please fill the form to continue</Text>
            <CustomTextInput
              name='user'
              placeholder='Full Name'
              ispassword={false}
            />
            <CustomTextInput
              name='email'
              placeholder='Email'
              ispassword={false}
            />
            <CustomTextInput
              name='key'
              placeholder='Password'
              ispassword={true}
            />

            <CustomButton label='Sign Up' />
            <TouchableOpacity
              onPress={() => navigation.navigate(Nav.Login)}
              style={{ marginTop: RFPercentage(8) }}
            >
              <Text style={Style.haveanaccount}>
                Already Have an account?
                <Text style={Style.signuptext}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
