import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Style } from '../../styles/appStyle';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '../../styles/icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('screen').width;

export default ({ isConnected, setisConnected }) => {
  return (
    <View style={Style.flexCenter}>
      <View style={{ position: 'relative', top: RFPercentage(-1.5) }}>
        <LinearGradient
          colors={['#00F2FE', '#4FACFE']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={Style.centerG}
        >
          <TouchableOpacity
            onPress={() => setisConnected(!isConnected)}
            style={Style.buttonCenterHome}
          >
            {isConnected == true ? (
              <>
                <Icon name='log' />
                <MaskedView
                  style={Style.maskedView}
                  maskElement={<Text style={Style.connnectText}>Stop</Text>}
                >
                  <LinearGradient
                    colors={['#00F2FE', '#4FACFE']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
              </>
            ) : (
              <MaskedView
                style={Style.maskedView}
                maskElement={<Text style={Style.connnectText}>Connect</Text>}
              >
                <LinearGradient
                  colors={['#00F2FE', '#4FACFE']}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={Style.flex}
                />
              </MaskedView>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
