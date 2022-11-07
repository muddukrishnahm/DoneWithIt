
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ButtonBlue from './assets/componets/buttons';

const LandingPage = ({navigation}) => {

  return (
    <View style={styles.container}>
    <Image
        style={styles.qpLogo}
        source={require('./static/qp_logo.png')}
      />
      <Image
        style={styles.landingLogo}
        source={require('./static/landing_logo.png')}
      />
      <Text style={styles.caption}>Create brilliant learning pathways with Qprofiles</Text>
      
      <ButtonBlue title="Create Account" onPress={() => navigation.navigate("Register")}></ButtonBlue>
      
       <View style={styles.login}>
          <Text>Have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{color: '#0165BB', textDecorationLine: 'underline'}}> Log in</Text>
            </Pressable>
       </View>

       <Text style={{fontSize: 18, margin: 20, color: 'grey'}}>OR</Text>

       <Pressable style={styles.googleButton} onPress={() => navigation.navigate("MYPACKAGE")}>
          <Image
            style={{width: 20, height: 20}}
            source={require('./static/google_logo.png')}
          />
          <Text style={{color: '#000'}}>Continue with Google</Text>
       </Pressable>
       
    </View>
   
  );
} 

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qpLogo: {
    width: 198,
    height: 52,
  },
  landingLogo: {
    marginTop: 40,
    marginBottom: 40,
    width: 327,
    height: 327,
  },
  caption: {
    // fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 24,
    height: 64,
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 333,
    height: 50,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 40,
    textDecorationColor: "#000",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default LandingPage;