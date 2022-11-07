import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Mypackages from "./mypackages";

const cardwidth = Math.round(Dimensions.get("window").width);

const OwnedPackage = (props) => {
    return (        
      <View
        style={styles.cardContainers}
        elevation={4}
        backgroundColor={props.color}
      >
        <View style={{ flexDirection: "row" }} elevation={2}>
          <Image
            style={{
              width: 128,
              height: 144,
              alignContent: "flex-start",
              marginLeft: 10,
            }}
            source={require("../../static/Course_Image1.png")}
          />
          <View
            style={{ marginTop: 10 }}
            backgroundColor={props.color}
          >
            <View
              style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, alignItems: "flex-end" }}
                source={require("../../static/notebook.png")}
              />
              <Text style={{ fontSize: 14, marginLeft: 5 }} numberOfLines={1}>
                {" "}
                4 MCQs{" "}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, alignItems: "flex-end" }}
                source={require("../../static/profile.png")}
              />
              <Text style={{ fontSize: 14, marginLeft: 5 }} numberOfLines={1}>
                {" "}
                2 INTERVIEW{" "}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}
            >
              <Image
                style={{ width: 25, height: 20, alignItems: "flex-end" }}
                source={require("../../static/level.png")}
              />
              <Text style={{ fontSize: 14, marginLeft: 5 }} numberOfLines={1}>
                {" "}
                EASY LEVEL{" "}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}
            >
              <Image
                style={{ width: 25, height: 24, alignItems: "flex-end" }}
                source={require("../../static/Expires.png")}
              />
              <Text style={{ fontSize: 14, marginLeft: 5 }} numberOfLines={1}>
                {" "}
                EXPIRES ON 05-11-2022{" "}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 15, fontWeight: "800", marginLeft: 23 }}>
          Learn Python Programming Mastercalss
        </Text>
        <Image 
           style={{ width: 25, height: 25, marginTop: 5}}
           source={require("../../static/Expand_down.png")}/>
      </View>
      

      
    );
};

const styles = StyleSheet.create({
  cardContainers: {
    width: cardwidth - 25,
    height: 211,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  icons: {
    width: 20,
    height: 20,
    alignItems: "flex-end",
  },
});

export default OwnedPackage;
