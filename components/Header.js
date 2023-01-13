import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#020202',
        fontFamily: 'Avenir',
    },
    textAccount: {
        fontSize: 16,
        fontFamily: 'Avenir',
    },
});

const introText = 'Bienvenido de vuelta!';
const accountText = 'Ruben Rodriguez';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{introText}</Text>
            <Text style={styles.textAccount}>{accountText}</Text>
        </View>
    );
};

export default Header;
