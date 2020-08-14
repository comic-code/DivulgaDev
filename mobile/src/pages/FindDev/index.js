import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMail from 'react-native-vector-icons/Fontisto'
import { Picker } from '@react-native-community/picker';
import { openInbox, openComposer } from 'react-native-email-link';

import FindLogo from '../../assets/findLogo.png';

import api from '../../services/api';

export default function FindDev({ navigation }) {
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
           <ScrollView contentContainerStyle={{paddingBottom: 20}}>

                {devs == '' ?
                    <View style={styles.initialView}>      
                        <Image style={styles.initialImage} source={FindLogo} />          
                        <Text style={styles.initialText}>As buscas podem ser feitas por Tecnologia e Estado, ou apenas por Tecnologia</Text>
                    </View> : 
                    
                    devs.map(dev => (
                    <View style={styles.cardDev} key={dev._id}>
                        <View style={{flex: 0.5}}>
                            <Image
                                style={styles.devImage}
                                source={{uri: dev.avatar_url}}
                            />
                            <Text style={styles.devCity}><Icon name="map-pin" size={10}/> {dev.city} - {dev.state}</Text>
                        </View>

                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.devName}>{dev.name}</Text>
                            <TouchableOpacity
                                style={styles.devSocial}
                                onPress={() => {
                                    navigation.navigate('Profile', { github_username: dev.github_username });
                                }}>
                                    <Text style={{color: '#fafafa', fontWeight: 'bold'}}><Icon
                                        name="github"
                                        size={20}
                                    />GitHub</Text>    
                                    
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.devSocial}
                                onPress={() => openInbox({
                                    message: 'O que você quer fazer?',
                                    cancelLabel: 'Voltar' 
                                },
                                openComposer({
                                    to: dev.email,
                                    subject: 'Olá, encontrei seu trabalho no DivulgaDev',
                                    body: ''
                                })
                                )}
                            >
                                <IconMail
                                    name="email"
                                    size={30}
                                    color="#fafafa"
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
                <View style={styles.inputCountry}>
                    <Picker
                        selectedValue={country}
                        onValueChange={
                            (itemValue, itemIndex) => setCountry(itemValue)}
                        mode='dropdown'
                    >   
                        <Picker.Item color='#666' label="Estado" value={undefined} />
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
                </View>
                
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

    initialView: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    initialImage: {
        width: 200,
        height: 200
    },

    initialText: {
        fontSize: 20,
        color: '#fafafa',
        textAlign: 'center',
        marginHorizontal: 10,
        fontWeight: "900"
    },  

    cardDev: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        height: 150,
        width: 360,
        borderRadius: 10,
        backgroundColor: '#0A3F73',
        borderWidth: 1,
        borderColor: '#fafafa',
        padding: 10,
        elevation: 5
    },  

    devImage: {
        height: 90,
        width: 90,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10,
        marginBottom: 5
    },

    devName: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fafafa'
    },

    devSocial: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 40,
        borderWidth: 1.3,
        borderRadius: 10,
        borderColor: '#fafafa',
        width: 150
    },

    devCity: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5
    },

    searchForm: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#fafafa',
        paddingVertical: 15,
        marginHorizontal: 20
    },

    inputTechs: {
        flex: 1,
        paddingHorizontal: 13,
        fontSize: 16,
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
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
        marginLeft: 1,
        marginRight: 1,
        backgroundColor: '#fff'
    },

    searchButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    }
});

