import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from 'react-native';
// import { globalStyles } from "../utils/GlobalStyle";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop   : 20,
        color: 'black',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textAccount: {
        fontSize: 20,
    },
  });

    const introText = "Bienvenido de vuelta!";
    const accountText = "Ruben Rodriguez";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>
        {introText}
      </Text>
      <Text  style={styles.textAccount}>
        {accountText}
      </Text>
    </View>
  );
};

export default Header;