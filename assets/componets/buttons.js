import React from 'react';
import { Pressable, StyleSheet, Text  } from 'react-native';

const ButtonBlue = (props) => {

  return (
    <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
} 

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 333,
        height: 50,
        backgroundColor: "#0165BB",
        borderRadius: 40,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default ButtonBlue;