import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function ShareDev() {
    return(
        <View style={styles.container}>
            <Text>ShareDev</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#042D59',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
});