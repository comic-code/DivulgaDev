import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

import Logo from '../../assets/initialLogo.png';

export default function Home({ navigation }) {
  return(
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor='#032040'/>
        
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={Logo}/>
        </View>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={ () => navigation.navigate('ShareDev')}
            >
            <Text style={styles.btnText}>Divulgue Seu Trabalho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={ () => navigation.navigate('FindDev')}
            >
            <Text style={styles.btnText}>Encontre Desenvolvedores</Text>
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

  containerLogo: {
    marginTop: 100,
    backgroundColor: '#0A3F73',
    borderRadius: 500,
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: { 
    width: 300,
    height: 200,
  },
  
  viewBtn: {
    marginBottom: 100
  },

  btn: {
    width: 300,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fafafa',
    backgroundColor: '#0A3F73',
    borderRadius: 10   
  },

  btnText: {
    fontSize: 20,
    color: '#fff'
  },

  copy: {
    color: '#fff',
  }
});