import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function FindDev() {
    return(
        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: '#fff'}}></View>
        
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.inputTechs}
                    placeholder="Digite a Tecnologia"
                    placeholderTextColor="#999"
                    autoCapitalize="words" //Coloca a primeira letra de cada palavra em capslock
                    autoCorrect={false}
                />
                

                <TouchableOpacity style={styles.searchButton} onPress={ () => {} } >
                    <Icon 
                        name="search"
                        size={30}
                        color="#042D59"
                    />
                </TouchableOpacity> 
            </View>
        </View>
    )

    

}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#042D59',
      alignItems: 'center',
    },
    searchForm: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        zIndex: 5,
        
    },
    inputTechs: {
        flex: 1,
        paddingHorizontal: 30,
        fontSize: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        //IOS
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        //Android
        elevation: 2
    },
    searchButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});

