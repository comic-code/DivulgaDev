import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

import Logo from '../../assets/logo.png';

export default function Home({ navigation }) {
  return(
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor='#032040'/>
        <Image style={styles.logo} source={Logo}/>
        
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={ () => navigation.navigate('ShareDev')}
            >
            <Text style={styles.btnText}>Divulgue seu trabalho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={ () => navigation.navigate('FindDev')}
            >
            <Text style={styles.btnText}>Encontre devs</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.copy}>DivulgaDev©</Text>
      </View>

    </>
  )
} 

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#042D59',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  logo: { 
    width: 300,
    height: 200,
    marginTop: 100
  },
  
  viewBtn: {
    marginBottom: 100
  },

  btn: {
    width: 300,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25   
  },

  btnText: {
    fontSize: 20,
    color: '#fff'
  },

  copy: {
    color: '#fff',
  }
});