import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
const WIDTH = Dimensions.get('screen').width;

export default ({ isConnected, setisConnected }) => {
  return (
    <View style={Style.dflex}>
      <ImageBackground style={Style.dflex}>
        <View style={Style.btminner}>
          <Icon name='back' WIDTH={WIDTH} />
        </View>
        <View style={Style.btminner1}>
          <View style={Style.btminnerflex}>
            <Icon name='shld' />
            {isConnected == true ? (
              <Text style={Style.btmstatustext}>Connected</Text>
            ) : (
              <Text style={Style.btmstatustext}>Not Connected</Text>
            )}
          </View>
          {isConnected == true ? (
            <View>
              <Text style={Style.timeText}>00:30:20</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: RFValue(30),
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginRight: 13 }}>
                    <Text style={Style.subdownloadUploadStatus}>Download</Text>
                    <Text style={Style.dataTextMain}>
                      75.5 <Text style={Style.dataText}>Kb</Text>
                    </Text>
                  </View>
                  <View>
                    <AnimatedCircularProgress
                      size={40}
                      width={5}
                      fill={80}
                      tintColor='#00e0ff'
                      backgroundColor='#001F3F'
                    >
                      {(fill) => <Icon name='down' />}
                    </AnimatedCircularProgress>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: RFPercentage(5),
                  }}
                >
                  <View>
                    <AnimatedCircularProgress
                      size={40}
                      width={5}
                      fill={80}
                      tintColor='#00e0ff'
                      backgroundColor='#001F3F'
                    >
                      {(fill) => <Icon name='Up' />}
                    </AnimatedCircularProgress>
                  </View>

                  <View style={{ marginLeft: 13 }}>
                    <Text style={Style.subdownloadUploadStatus}>Upload</Text>
                    <Text style={Style.dataTextMain}>
                      75.5
                      <Text style={Style.dataText}> Kb</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};
