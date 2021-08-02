import Icon from '../../styles/icons';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  I18nManager,
} from 'react-native';

import PropTypes from 'prop-types';

export default class ToggleSwitch extends React.Component {
  static calculateDimensions(size) {
    switch (size) {
      case 'small':
        return {
          width: 40,
          padding: 10,
          circleWidth: 15,
          circleHeight: 15,
          translateX: 22,
        };
      case 'large':
        return {
          width: 154,
          padding: 20,
          circleWidth: 56,
          circleHeight: 56,
          translateX: 35,
        };
      default:
        return {
          width: 46,
          padding: 12,
          circleWidth: 18,
          circleHeight: 18,
          translateX: 26,
        };
    }
  }

  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onColor: PropTypes.string,
    offColor: PropTypes.string,
    size: PropTypes.string,
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    thumbOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    thumbOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    trackOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    trackOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onToggle: PropTypes.func,
    icon: PropTypes.object,
    disabled: PropTypes.bool,
    animationSpeed: PropTypes.number,
    useNativeDriver: PropTypes.bool,
    circleColor: PropTypes.string,
  };

  static defaultProps = {
    isOn: false,
    onColor: '#4cd137',
    offColor: '#ecf0f1',
    size: 'medium',
    labelStyle: {},
    thumbOnStyle: {},
    thumbOffStyle: {},
    trackOnStyle: {},
    trackOffStyle: {},
    icon: null,
    disabled: false,
    animationSpeed: 300,
    useNativeDriver: true,
    circleColor: 'white',
  };

  offsetX = new Animated.Value(0);
  dimensions = ToggleSwitch.calculateDimensions(this.props.size);

  createToggleSwitchStyle = () => [
    {
      justifyContent: 'center',
      width: this.dimensions.width,
      borderRadius: 25,
      height: 20,

      padding: this.dimensions.padding,
      paddingTop: 15,
      paddingBottom: 30,
      backgroundColor: this.props.isOn
        ? this.props.onColor
        : this.props.offColor,
    },
    this.props.isOn ? this.props.trackOnStyle : this.props.trackOffStyle,
  ];

  createInsideCircleStyle = () => [
    {
      alignItems: 'center',
      justifyContent: 'center',
      margin: Platform.OS === 'web' ? 0 : 0,
      left: Platform.OS === 'web' ? 4 : 0,
      position: 'absolute',
      backgroundColor: this.props.circleColor,
      transform: [{ translateX: this.offsetX }],
      width: this.dimensions.circleWidth,
      height: this.dimensions.circleHeight,
      borderRadius: this.dimensions.circleWidth / 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
    },
    this.props.isOn ? this.props.thumbOnStyle : this.props.thumbOffStyle,
  ];

  render() {
    const {
      animationSpeed,
      useNativeDriver,
      isOn,
      onToggle,
      disabled,
      labelStyle,
      label,
      icon,
    } = this.props;

    let toValue;
    if (!I18nManager.isRTL && isOn) {
      toValue = this.dimensions.width - this.dimensions.translateX;
    } else if (I18nManager.isRTL && isOn) {
      toValue = -this.dimensions.width + this.dimensions.translateX;
    } else {
      toValue = -1;
    }

    Animated.timing(this.offsetX, {
      toValue,
      duration: animationSpeed,
      useNativeDriver: useNativeDriver,
    }).start();

    return (
      <View style={styles.container} {...this.props}>
        <TouchableOpacity
          style={[
            this.createToggleSwitchStyle(),
            {
              borderColor: this.props.theme == 1 ? '#FFFFFF' : '#000000',
              borderWidth: 1,
            },
          ]}
          activeOpacity={0.8}
          onPress={() => (disabled ? null : onToggle(!isOn))}
        >
          {this.props.isOn ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 50,
                marginLeft: 26,
              }}
            >
              <Icon theme={this.props.theme} name='e2' />
              <Icon theme={this.props.theme} name='e2' />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 50,
                marginLeft: 56,
              }}
            >
              <Icon theme={this.props.theme} name='e1' />
              <Icon theme={this.props.theme} name='e1' />
            </View>
          )}
          <Animated.View
            style={[
              this.createInsideCircleStyle(),
              { backgroundColor: this.props.isOn ? '#1C60CD' : 'white' },
            ]}
          >
            <Icon name={this.props.isOn ? 's2' : 's1'} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    marginHorizontal: 10,
  },
});
