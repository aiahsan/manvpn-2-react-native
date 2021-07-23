import React from 'react';
import Topbar from '../componentes/tools/topbar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CenterButton from '../componentes/tools/centerButton';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Icon from '../styles/icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../styles/appStyle';
import ConnectButton from '../componentes/tools/connectButton';
import BottomView from '../componentes/tools/bottomView';
const WIDTH = Dimensions.get('screen').width;
const App = () => {
  const [isConnected, setisConnected] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/world-map-png.png')}
        style={Style.dflex}
        imageStyle={Style.imageBack}
      >
        <View style={Style.homecontainer}>
          <Topbar isHome={true} />
          <View style={Style.homeTop}>
            <CenterButton name='Indonesia' ip='139.162.27.99' />
          </View>

          <ConnectButton
            isConnected={isConnected}
            setisConnected={setisConnected}
          />
        </View>

        <BottomView isConnected={isConnected} setisConnected={setisConnected} />
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
