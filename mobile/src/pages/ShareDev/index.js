import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';

import api from '../../services/api';

import shareLogo from '../../assets/shareLogo.png'

export default function ShareDev() {

    const [email, setEmail] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const [validate, setValidate] = useState(false)

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    function validateEmail() {
        // Verificando @
        if (email.indexOf('@') === -1) {
            setVisible3(true);
            setValidate(false);
        } else {
            setValidate(true);
        }

        // Separando
        let user = email.substring(0, email.indexOf("@"));
        let domain = email.substring(email.indexOf("@")+ 1, email.length);
        
        // Validando
        if ((user.length >=1) &&
            (domain.length >=3) && 
            (user.search('@')==-1) && 
            (domain.search('@')==-1) &&
            (user.search(' ')==-1) && 
            (domain.search(' ')==-1) &&
            (domain.search('.')!=-1) &&      
            (domain.indexOf('.') >=1)&& 
            (domain.lastIndexOf('.') < domain.length - 1)) {
                setValidate(true);
        } else {
            setVisible3(true);
            setValidate(false);
        }

    }

    async function share() {
    

        if(email == '' || github_username == '' || techs == '' || country == '' || city == '' ) {
            setVisible2(true);
            return
        }

        if(validate == false) {
            setVisible3(true);
            return
        }

        const response = await api.post('/devs', {
            email,
            github_username,
            techs,
            state: country,
            city
        });
        console.log(response.data);
        setEmail(email => '');
        setGithub_username(github_username => '');
        setTechs(techs => '');
        setCountry(country => '');
        setCity(city => '');

        setVisible(true);
    }

    return(
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
                <View style={styles.containerLogo}>
                    <Image 
                        style={styles.shareLogo}
                        source={shareLogo}
                    />
                </View>
                <Modal
                    isVisible={visible}
                    onBackdropPress={()=>setVisible(false)}
                    swipeDirection={['up', 'down']}
                    onSwipeComplete={() => setVisible(false)}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Dev divulgado com sucesso!</Text>
                    
                        <TouchableOpacity
                            style={styles.modalBtn}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.modalBtnText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    isVisible={visible2}
                    onBackdropPress={()=>setVisible2(false)}
                    swipeDirection={['up', 'down']}
                    onSwipeComplete={() => setVisible2(false)}
                >
                    <View style={styles.modalView2}>
                        <Text style={styles.modalText2}>Por favor, preencha todos os campos corretamente.</Text>
                    
                        <TouchableOpacity
                            style={styles.modalBtn2}
                            onPress={() => setVisible2(false)}
                        >
                            <Text style={styles.modalBtnText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    isVisible={visible3}
                    onBackdropPress={()=>setVisible3(false)}
                    swipeDirection={['up', 'down']}
                    onSwipeComplete={() => setVisible3(false)}
                >
                    <View style={styles.modalView2}>
                        <Text style={styles.modalText}>Por favor, digite um email válido.</Text>
                    
                        <TouchableOpacity
                            style={styles.modalBtn2}
                            onPress={() => setVisible3(false)}
                        >
                            <Text style={styles.modalBtnText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                
                <View style={styles.inputView}>
                    <View>
                        <Text style={styles.text}>E-mail</Text> 
                        <TextInput 
                            style={styles.defaultInput}
                            placeholder="fulano@email.com"
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                            onBlur={validateEmail}
                            
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

                    <TouchableOpacity
                        style={styles.btnShare}
                        onPress={ share }
                    >
                        <Text style={styles.btnText}>Divulgar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',    
        backgroundColor: '#042D59',
    },

    containerLogo: {
        minWidth: '100%',
        alignItems: 'center',
        paddingBottom: 60,
        backgroundColor: '#0A3F73'
    },  
    
    shareLogo: {
        width: 240,
        height: 110,
        marginVertical: 20
    },  

    inputView: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        width: '100%',
        top: -50,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: '#042D59'
    },

    text: {
        color: '#fff',  
        marginLeft: 5,
        marginTop: 15
    },

    defaultInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 240,
        marginTop: 5
    },

    countryInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingRight: 0,
        width: 110,
        fontSize: 2
    },

    cityInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 115,
        paddingHorizontal: 10
    },

    btnShare: {
        marginTop: 40,
        borderWidth: 1,
        padding: 15,
        borderColor: '#fafafa',
        backgroundColor: '#0A3F73',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150
    },

    btnText: {
        color: '#fff',
        fontSize: 20   
    },

    modalView: {
        backgroundColor: '#042D59',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    modalView2: {
        backgroundColor: '#59140F',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    
    modalText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },

    modalText2: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center'
    },

    modalBtn: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    modalBtn2: {
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    modalBtnText: {
        color: '#fff',
    }

});