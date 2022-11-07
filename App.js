import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mypackages from "./assets/componets/mypackages";
import LandingPage from './landingpage';
import { View } from "react-native";


const QP_App = () => {
  const Stack = createNativeStackNavigator();
  return (

<NavigationContainer>
      <Stack.Navigator initialRouteName="MYPACKAGE">
        {/* <Stack.Screen options={{headerShown:false}} name="LP" component={LandingPage}/> */}
        <Stack.Screen options={{headerShown:false}} name="MYPACKAGE" component={Mypackages}/>
      </Stack.Navigator>
   </NavigationContainer>

  );
} 

export default QP_App;