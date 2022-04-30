import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import userList from "../userList.json";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {

    const submit= ()=>{
        navigation.navigate("Details");
    }

    
  return (
    <View>
      <ScrollView horizontal>
        {userList.map((item) => (
          <Text style={styles.text1}>{item.name}</Text>
        ))}
      </ScrollView>
      <ScrollView horizontal>
        

        {userList.map((item) => (
          <View style={{}}>
              {/* <View style={{position:"absolute", marginLeft:10,}}>
          <AntDesign name="heart" size={20} color="grey" />
        </View> */}
        
            <Image
              source={{ uri: item.photo }}
              style={[styles.img, { borderWidth: 4 }]}
            />
            <View style={styles.price}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }} 
              onPress={()=> submit()}>
                Ceramic Tea
              </Text>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}> $7.00</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.newText}> New</Text>
      <ScrollView horizontal>
        {userList.map((item) => (
          <Image
            source={{ uri: item.photo }}
            style={[
              styles.img2,
              { borderWidth: 4, backgroundColor: "#0349fc" },
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text1: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  img: {
    height: 270,
    width: 230,
    borderRadius: 10,
    borderColor: "#ffff",
    //margin:10,
    marginTop: 19,
    marginLeft: 10,
  },
  newText: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  img2: {
    height: 150,
    width: 130,
    borderRadius: 10,
    borderColor: "#ffff",
    margin: 10,
    marginTop: 15,
  },
  price: {
    height: 40,
    width: 230,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    marginTop: 0,
  },
});
