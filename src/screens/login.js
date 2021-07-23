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
import { Style } from '../styles/appStyle';
import CustomTextInput from '../componentes/tools/textinput';
import CustomButton from '../componentes/tools/button';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Checkbox } from 'react-native-paper';

import { Nav } from '../utiles/navigationType';

export default () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);

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
            <Text style={Style.title}>Welcome Back!</Text>
            <Text style={Style.desc}>Please signin to your account</Text>
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
            <View style={Style.loginContainer}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color='white'
              />
              <Text style={[Style.textForgot]}>Remember Me</Text>
            </View>
            <CustomButton label='Sign In' />
            <TouchableOpacity>
              <Text style={{ color: 'white', marginTop: 10 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Nav.SignUp)}
              style={{ marginTop: RFPercentage(8) }}
            >
              <Text style={Style.haveanaccount}>
                Don't Have an account?
                <Text style={Style.signuptext}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
