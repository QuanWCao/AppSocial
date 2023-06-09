import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
  Text,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
import { Avatar } from "@rneui/themed";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import moment from "moment";
import * as Device from 'expo-device';
import { useNavigation, useRoute } from "@react-navigation/native";


export default function EditPost() {
  const navigation = useNavigation();
  const route = useRoute()

  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePersonUrl, setPersonImageUrl] = useState("");
  useEffect(() => {
    if (route.params) {
      if (route.params.postTitle
        ) {
        setTweet(route.params.postTitle)
      }
      if (route.params.postImage) {
            setImageUrl(route.params.postImage)
      }
      if (route.params.postPersonImage) {
        setPersonImageUrl(route.params.postPersonImage)
  }

    }

  }, [route]);




  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setImageUrl(result.uri);
      }


    } catch (E) {
      console.log(E);
    }
  };


  const uploadImage =  () => {
    console.warn('ga lam');
  }

  const onPostTweet = () => {
    console.warn('ga lam');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <AntDesign name="close" size={30} color='#4D9FEC' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>

          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
      <Avatar 
          size={50}
              rounded
              source={{uri : imagePersonUrl}}
            // containerStyle={{ backgroundColor: "orange" }}
             />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          {/* <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImage}>Pick a image</Text>
          </TouchableOpacity> */}

        </View>

      </View>
      <View style={{flex: 1}}>
      <Image source={{uri :imageUrl }} style={{resizeMode:' cover' ,width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height/3,}} />
      </View>
      <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: "#4D9FEC",
        position: "absolute",
        bottom: 20,
        right: 50,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={pickImage}
    >
    <FontAwesome name="photo" size={40} color="#ffffff" />
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: '#4D9FEC',
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
    marginRight: 50,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 16,
  },
  pickImage: {
    fontSize: 18,
    color: '#4D9FEC',
    marginVertical: 10,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height/3,


  }
});