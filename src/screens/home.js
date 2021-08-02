import React from 'react';
import Topbar from '../componentes/tools/topbar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { useRef } from 'react';
import CenterButton from '../componentes/tools/centerButton';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../styles/appStyle';
import ConnectButton from '../componentes/tools/connectButton';
import BottomView from '../componentes/tools/bottomView';
const WIDTH = Dimensions.get('screen').width;
import { useSelector } from 'react-redux';

const App = () => {
  const [isConnected, setisConnected] = React.useState(false);
  const theme = useSelector((x) => x);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme == 1 ? '#1d243e' : '#E5E5E5' },
      ]}
    >
      <ImageBackground
        source={require('../images/world-map-png.png')}
        style={Style.dflex}
        imageStyle={Style.imageBack}
      >
        <View style={Style.flex}>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Topbar theme={theme} isHome={true} />
          </View>
          <View
            style={{
              flex: 0.6,
              justifyContent: 'center',
              alignItems: 'center',
              top: 45,
              position: 'relative',
            }}
          >
            <CenterButton theme={theme} name='Indonesia' ip='139.162.27.99' />
          </View>
          <View style={{ flex: 1 }}>
            <BottomView
              theme={theme}
              isConnected={isConnected}
              setisConnected={setisConnected}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d243e',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  buttonContainer: {},
  buttonText: {},
});

export default App;
