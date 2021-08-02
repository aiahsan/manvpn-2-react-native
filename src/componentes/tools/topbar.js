import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Nav } from '../../utiles/navigationType';
import { Style } from '../../styles/appStyle';
export default ({ isHome, title, theme }) => {
  const navigation = useNavigation();
  return (
    <View style={Style.headerFlex}>
      <TouchableOpacity
        onPress={() =>
          isHome == true
            ? navigation.dispatch(DrawerActions.openDrawer())
            : navigation.goBack()
        }
        style={[
          Style.headerLeftButton,
          {
            backgroundColor:
              theme == 1 ? 'rgba(255, 255, 255, 0.1)' : '#F6F6F6',
          },
          Style.shadowApp,
        ]}
      >
        <View>
          <Icon theme={theme} name={isHome == true ? 'menu' : 'back1'} />
        </View>
      </TouchableOpacity>
      {isHome == true ? (
        <Image
          style={Style.headerImage}
          source={
            theme == 1
              ? require('../../images/logo1.png')
              : require('../../images/logo3.png')
          }
        />
      ) : (
        <View>
          <Text
            style={[
              Style.headerText,
              {
                color: theme == 1 ? '#FFFFFF' : '#083459',
                textTransform: 'uppercase',
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
      {isHome == true ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(Nav.Settings)}
          style={[
            Style.headerSettingButton,
            {
              backgroundColor:
                theme == 1 ? 'rgba(255, 255, 255, 0.1)' : '#F6F6F6',
            },
            Style.shadowApp,
          ]}
        >
          <View>
            <Icon theme={theme} name='setting' />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={Style.headerHideButton}></View>
      )}
    </View>
  );
};
