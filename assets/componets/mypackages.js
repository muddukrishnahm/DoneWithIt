import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import OwnedPackage from './mypackagecard';

const Mypackages = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10}}>
      <Ionicicons color={"#000"}  size={30} name="arrow-back-outline"></Ionicicons>
      <Text style={styles.Heading}>MY PACKAGE</Text>
      <Ionicicons color={"#000"}  size={30} name="filter-outline"></Ionicicons>
      </View>
      <View style={{alignItems: "center"}}>
        <OwnedPackage color={"#FFF"}/>
      </View>
      <View style={{alignItems: "center"}}>
        <OwnedPackage color={"#ffdede"}/>
      </View>      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 50,
   backgroundColor: "#FFF",
  },
  Heading: {
   fontWeight: "800",
   fontSize: 20,
  },
   
})


export default Mypackages;  