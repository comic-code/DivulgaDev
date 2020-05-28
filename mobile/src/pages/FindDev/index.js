import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-community/picker';

import api from '../../services/api';

export default function FindDev() {
    const [techs, setTechs] = useState();
    const [country, setCountry] = useState();
    const [devs, setDevs] = useState([]);

    

    async function loadDevs() {
        const response = await api.get('/search', {
            params: {
            techs,
            state: country
            }
        });

        setDevs(response.data.devs);    
        console.log(country);
    }    
    

    return(
        <View style={styles.container}>
            
           <ScrollView>
                {devs.map(dev => (
                    <View style={styles.cardDev} key={dev._id}>
                        <View style={{flex: 0.5}}>
                            <Image
                                style={styles.devImage}
                                source={{uri: dev.avatar_url}}
                            />
                            <Text style={styles.devCity}><Icon name="map-pin"/> {dev.city}</Text>
                            <Text style={styles.devCity}>{dev.state}</Text>
                        </View>

                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.devName}>{dev.name}</Text>
                            <TouchableOpacity style={styles.devSocial}>
                                <Text style={{fontSize: 22}}>GitHub</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.devSocial}>
                                <Icon 
                                    name="mail"
                                    size={40}
                                    color="#042D59"
                                />
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                ))}
            </ScrollView>
        
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.inputTechs}
                    placeholder="Tecnologia"
                    autoCapitalize="words" //Coloca a primeira letra de cada palavra em capslock
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <Picker
                    style={styles.inputCountry}
                    selectedValue={country}
                    onValueChange={
                        (itemValue, itemIndex) => setCountry(itemValue)}
                    mode='dropdown'
                >   
                    <Picker.Item label="Estado" value="" />
                    <Picker.Item label="Acre" value="AC" />
                    <Picker.Item label="Alagoas" value="AL" />
                    <Picker.Item label="Amapá" value="AP" />
                    <Picker.Item label="Amazonas" value="AM" />
                    <Picker.Item label="Bahia" value="BA" />
                    <Picker.Item label="Ceará" value="CE" />
                    <Picker.Item label="Distrito Federal" value="DF" />
                    <Picker.Item label="Espírito Santo" value="ES" />
                    <Picker.Item label="Goiás" value="GO" />
                    <Picker.Item label="Maranhão" value="MA" />
                    <Picker.Item label="Mato Grosso" value="MT" />
                    <Picker.Item label="Mato Grosso do Sul" value="MS" />
                    <Picker.Item label="Minas Gerais" value="MG" />
                    <Picker.Item label="Pará" value="PA" />
                    <Picker.Item label="Paraíba" value="PB" />
                    <Picker.Item label="Paraná" value="PR" />
                    <Picker.Item label="Pernambuco" value="PE" />
                    <Picker.Item label="Piauí" value="PI" />
                    <Picker.Item label="Rio de Janeiro" value="RJ" />
                    <Picker.Item label="Rio Grande do Norte" value="RN" />
                    <Picker.Item label="Rio Grande do Sul" value="RS" />
                    <Picker.Item label="Rondônia" value="RO" />
                    <Picker.Item label="Roraima" value="RR" />
                    <Picker.Item label="Santa Catarina" value="SC" />
                    <Picker.Item label="São Paulo" value="SP" />
                    <Picker.Item label="Sergipe" value="SE" />
                    <Picker.Item label="Tocantins" value="TO" />
                </Picker>
                <TouchableOpacity style={styles.searchButton} onPress={ loadDevs } >
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

    viewDevs: {
    },

    cardDev: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        height: 150,
        width: 360,
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10
    },  

    devImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginBottom: 5
    },

    devName: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    devSocial: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        width: 150
    },

    devCity: {
        color: '#666',
        fontWeight: 'bold',
        marginLeft: 3
    },

    searchForm: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 15
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

    inputCountry: {
        flex: 1,
        marginHorizontal: 1,
        backgroundColor: '#fff'
    },

    searchButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }
});

