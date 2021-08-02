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
import { useSelector } from 'react-redux';
import { Nav } from '../utiles/navigationType';

export default () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
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
              Welcome Back!
            </Text>
            <Text
              style={[
                Style.desc,
                ,
                { color: theme == 1 ? 'white' : '#083459' },
              ]}
            >
              Please signin to your account
            </Text>
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
            <View style={Style.loginContainer}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                uncheckedColor={theme == 1 ? 'white' : '#083459'}
                color={theme == 1 ? 'white' : '#083459'}
              />
              <Text
                style={[
                  Style.textForgot,
                  { color: theme == 1 ? '#b0afb2' : '#083459' },
                ]}
              >
                Remember Me
              </Text>
            </View>
            <CustomButton label='Sign In' />
            <TouchableOpacity>
              <Text
                style={{
                  color: theme == 1 ? '#b0afb2' : '#083459',
                  marginTop: 10,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Nav.SignUp)}
              style={{ marginTop: RFPercentage(8) }}
            >
              <Text
                style={[
                  Style.haveanaccount,
                  { color: theme == 1 ? 'white' : '#083459' },
                ]}
              >
                Don't Have an account?
                <Text
                  style={[
                    Style.signuptext,
                    { color: theme == 1 ? 'white' : '#083459' },
                  ]}
                >
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};
