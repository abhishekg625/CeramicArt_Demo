import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import userList from "../userList.json";

const DetailsScreen = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://tea-village.com/828/chinese-clay-teapot.jpg" }}
        style={[styles.img2, { borderWidth: 4, backgroundColor: "#0349fc" }]}
      />
      <View style={{alignItems:"center", margin:20}}>
        <Text style={{ fontWeight:"bold"}}>CeramicTea Pot </Text>
        <Text  style={{ fontWeight:"bold"}}>very nice Pot all should buy item</Text>
        <Text  style={{ fontWeight:"bold"}}> Price $ 7.00</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  img2: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    borderColor: "#ffff",
    // margin: 10,
    // marginTop: 15,
  },
});
