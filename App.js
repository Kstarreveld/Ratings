import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-web';
import React, { useState } from "react";
import { Bier } from './Bier.js';
import styles from './Styles.js';

export default function App() {
  const [like, setLike ] = useState(0);
  const [biertjes, setBiertjes]= useState([]);
  const [ingelogd, setIngelogd] = useState(false);
  
  function MaakEenBierlijst()
  {
    const ar = [];
    for (let index = 0; index < 20; index++) {
      ar.push(<Bier naam={index} key={index}></Bier>)
      
    }
    return (ar);
  }

  function likeBeer()
  {
      let x = like + 1;
      setLike(x)
  }
  function dislikeBeer()
  {
      let x = like - 1;
      setLike(x)
  }
  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/beer.jpg')} style={{width: '100%', height: '100%'}}>
     {  MaakEenBierlijst()}
      
       <TouchableHighlight onPress={()=>likeBeer()}>
          <Text style={styles.knop}>Bier</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>dislikeBeer()}>
          <Text style={styles.knop2}>Bier</Text>
      </TouchableHighlight>
      <Text>{like}</Text>
      <StatusBar style="auto" />
      </ImageBackground>
   </View>
  );
}