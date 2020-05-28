import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Picker } from '@react-native-community/picker';

import api from '../../services/api';

import shareLogo from '../../assets/shareLogo.png'

export default function ShareDev() {

    const [email, setEmail] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    async function share() {
        const response = await api.post('/devs', {
            email,
            github_username,
            techs,
            state: country,
            city
        });
        console.log(response.data);
    }


    return(
        <View style={styles.container}>

            <View>
                <Image 
                    style={styles.shareLogo}
                    source={shareLogo}
                />

                
                <View style={styles.inputView}>
                    <Text style={styles.text}>E-mail</Text> 
                    <TextInput 
                        style={styles.defaultInput}
                        placeholder="fulano@email.com"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View>
                    <Text style={styles.text}>GitHub.com/</Text> 
                    <TextInput 
                        style={styles.defaultInput}
                        placeholder="devlogin"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={github_username}
                        onChangeText={setGithub_username}
                    />
                </View>

                <View>
                    <Text style={styles.text}>Tecnologias</Text> 
                    <TextInput 
                        style={styles.defaultInput}
                        placeholder="JavaScript, PHP, React"
                        autoCapitalize="words" //Coloca a primeira letra de cada palavra em capslock
                        autoCorrect={false}
                        value={techs}
                        onChangeText={setTechs}
                    />
                </View>

                <View style={{flexDirection: "row"}}>
                    <View>
                        <Text style={styles.text}>Estado</Text> 
                        <View style={styles.countryInput}>
                        <Picker
                        mode="dropdown"
                        selectedValue={country}
                        onValueChange={
                        (itemValue, itemIndex) => setCountry(itemValue)}
                        >
                            <Picker.Item label="" value="" />
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
                    </View>
                    <View style={{marginLeft: 15}}>
                        <Text style={styles.text}>Cidade</Text> 
                        <TextInput 
                            style={styles.cityInput}
                            value={city}
                            onChangeText={setCity}
                        />
                    </View>
                </View>
            </View>

                <TouchableOpacity
                    style={styles.btnShare}
                    onPress={ share }
                >
                    <Text style={styles.btnText}>Divulgar</Text>
                </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#042D59',
        alignItems: 'center',
    },
    
    shareLogo: {
        width: 240,
        height: 110,
        marginVertical: 20
    },  

    text: {
        color: '#fff',  
        marginLeft: 10,
        marginTop: 15
    },

    defaultInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        width: 240
        
    },

    countryInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingRight: 0,
        width: 110,
        fontSize: 2
    },

    cityInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 115,
        paddingHorizontal: 10
    },

    btnShare: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        color: '#fff',
        fontSize: 20   
    }
});