import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../styles/icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Nav } from '../../utiles/navigationType';
import { Style } from '../../styles/appStyle';
export default ({ isHome, title }) => {
  const navigation = useNavigation();
  return (
    <View style={Style.headerFlex}>
      <TouchableOpacity
        onPress={() =>
          isHome == true
            ? navigation.dispatch(DrawerActions.openDrawer())
            : navigation.goBack()
        }
        style={Style.headerLeftButton}
      >
        <View>
          <Icon name={isHome == true ? 'menu' : 'back1'} />
        </View>
      </TouchableOpacity>
      {isHome == true ? (
        <Image
          style={Style.headerImage}
          source={require('../../images/logo1.png')}
        />
      ) : (
        <View>
          <Text style={Style.headerText}>{title}</Text>
        </View>
      )}
      {isHome == true ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(Nav.Settings)}
          style={Style.headerSettingButton}
        >
          <View>
            <Icon name='setting' />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={Style.headerHideButton}></View>
      )}
    </View>
  );
};
