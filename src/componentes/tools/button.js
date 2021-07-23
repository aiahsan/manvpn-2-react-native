import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Button
   } from 'react-native-paper';

import { Style } from '../../styles/appStyle';
import {Nav} from '../../utiles/navigationType'
import { useNavigation } from '@react-navigation/native'

const CustomButton=({label})=>{
    const navigation = useNavigation();

    return   <TouchableOpacity style={{width:'100%'}} onPress={()=>navigation.navigate(Nav.Home)}><Button mode="contained" labelStyle={Style.buttonLabel} style={Style.button}>{label}</Button></TouchableOpacity>
  }
  export default CustomButton;