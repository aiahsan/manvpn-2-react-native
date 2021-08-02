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
import ConnectButton from '../tools/connectButton';
import Icon from '../../styles/icons';
import { Style } from '../../styles/appStyle';
const WIDTH = Dimensions.get('screen').width;

export default ({ isConnected, setisConnected, theme }) => {
  return (
    <View style={[{ flex: 1, height: '100%', backgroundColor: 'black' }]}>
      <ImageBackground style={[Style.dflex, { backgroundColor: 'blue' }]}>
        {/* <View style={Style.btminner}>
          <Icon name='back' WIDTH={WIDTH} />
        </View> */}
        <View
          style={[
            {
              position: 'absolute',
              alignSelf: 'center',
              top: -20,
              zIndex: 1111,
            },
          ]}
        >
          <ConnectButton
            isConnected={isConnected}
            setisConnected={setisConnected}
            theme={theme}
          />
        </View>
        <View
          style={[
            styles.badgeRibbon,
            { backgroundColor: theme == 1 ? '#083358' : '#ececec' },
          ]}
        ></View>
        <View
          style={[
            styles.badgeRibbonCircle,
            { backgroundColor: theme == 1 ? 'rgb(27,37,62)' : '#E5E5E5' },
          ]}
        />

        <View
          style={[
            styles.badgeRibbon1,
            { backgroundColor: theme == 1 ? 'rgb(27,37,62)' : '#E5E5E5' },
          ]}
        >
          <View
            style={[
              styles.badgeRibbonNeg140,
              { borderBottomColor: theme == 1 ? '#083358' : '#ececec' },
            ]}
          />
          <View
            style={[
              styles.badgeRibbon140,
              { borderBottomColor: theme == 1 ? '#083358' : '#ececec' },
            ]}
          />
        </View>
        <View style={Style.btminner1}>
          <View style={Style.btminnerflex}>
            <Icon theme={theme} name='shld' />
            {isConnected == true ? (
              <Text
                style={[
                  Style.btmstatustext,
                  { color: theme == 1 ? 'white' : '#083459' },
                ]}
              >
                Connected
              </Text>
            ) : (
              <Text
                style={[
                  Style.btmstatustext,
                  { color: theme == 1 ? 'white' : '#083459' },
                ]}
              >
                Not Connected
              </Text>
            )}
          </View>
          {isConnected == true ? (
            <View>
              <Text
                style={[
                  Style.timeText,
                  { color: theme == 1 ? 'white' : '#083459' },
                ]}
              >
                00:30:20
              </Text>
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
                    <Text
                      style={[
                        Style.dataTextMain,
                        { color: theme == 1 ? 'white' : '#083459' },
                      ]}
                    >
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
                      {(fill) => <Icon theme={theme} name='down' />}
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
                      {(fill) => <Icon theme={theme} name='Up' />}
                    </AnimatedCircularProgress>
                  </View>

                  <View style={{ marginLeft: 13 }}>
                    <Text style={Style.subdownloadUploadStatus}>Upload</Text>
                    <Text
                      style={[
                        Style.dataTextMain,
                        { color: theme == 1 ? 'white' : '#083459' },
                      ]}
                    >
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

const FixeDVal = 2;
const styles = StyleSheet.create({
  badgeRibbonCircle: {
    height: RFValue(WIDTH / FixeDVal),
    width: RFValue(WIDTH / FixeDVal),
    backgroundColor: 'rgb(27,37,62)',
    borderRadius: RFValue(WIDTH / FixeDVal),
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 2,
  },
  badgeRibbon1: {
    width: WIDTH,
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgb(27,37,62)',
    zIndex: 1,
  },
  badgeRibbon: {
    width: WIDTH,
    height: '100%',
    position: 'relative',
    backgroundColor: '#083358',
    top: WIDTH / 6,
    zIndex: 2,
  },
  badgeRibbon140: {
    backgroundColor: 'transparent',
    borderBottomWidth: WIDTH / 5.5,
    borderBottomColor: '#083358',
    borderLeftWidth: WIDTH / 3.5,
    borderLeftColor: 'transparent',

    borderRightColor: 'transparent',
    position: 'absolute',
    right: 0,
    // transform: [{ rotate: '140deg' }],
  },
  badgeRibbonNeg140: {
    backgroundColor: 'transparent',
    borderBottomWidth: WIDTH / 5.5,
    borderBottomColor: '#083358',
    borderRightWidth: WIDTH / 3.5,
    borderLeftColor: 'transparent',
    // borderRightWidth: 40,
    borderRightColor: 'transparent',
    position: 'absolute',

    // transform: [{ rotate: '-140deg' }],
  },
});
