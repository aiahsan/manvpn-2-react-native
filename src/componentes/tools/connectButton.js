import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Style } from '../../styles/appStyle';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '../../styles/icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('screen').width;
const haldWidth = WIDTH / 2;
const emptySpace = WIDTH - haldWidth;
export default ({ isConnected, setisConnected, theme }) => {
  React.useState(() => {}, []);
  return (
    <View style={[Style.flexCenter, { zIndex: 3, top: RFPercentage(5) }]}>
      <View style={{ position: 'relative', top: RFPercentage(-1.5) }}>
        <LinearGradient
          colors={[
            theme == 1 ? '#00F2FE' : '#1C60CD',
            theme == 1 ? '#4FACFE' : '#4FACFE',
          ]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={[Style.centerG, Style.shadowApp, { shadowColor: '#1C60CD' }]}
        >
          <TouchableOpacity
            onPress={() => setisConnected(!isConnected)}
            style={[
              Style.buttonCenterHome,
              { backgroundColor: theme == 1 ? '#083358' : 'white' },
            ]}
          >
            {isConnected == true ? (
              <>
                <Icon theme={theme} name='log' />
                <MaskedView
                  style={Style.maskedView}
                  maskElement={
                    <Text
                      style={[
                        Style.connnectText,
                        { textTransform: 'uppercase' },
                      ]}
                    >
                      Stop
                    </Text>
                  }
                >
                  <LinearGradient
                    colors={[
                      theme == 1 ? '#00F2FE' : '#1C60CD',
                      theme == 1 ? '#4FACFE' : '#1C60CD',
                    ]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
              </>
            ) : (
              <MaskedView
                style={Style.maskedView}
                maskElement={
                  <Text
                    style={[Style.connnectText, { textTransform: 'uppercase' }]}
                  >
                    Connect
                  </Text>
                }
              >
                <LinearGradient
                  colors={[
                    theme == 1 ? '#00F2FE' : '#1C60CD',
                    theme == 1 ? '#4FACFE' : '#1C60CD',
                  ]}
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
