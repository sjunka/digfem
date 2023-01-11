import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
// import { globalStyles } from "../utils/GlobalStyle";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        width: '100%',
        bottom: 60,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    buttonTodos : {
        width: '100%',
        backgroundColor: '#334FFA',
        borderRadius: 10,
        paddingVertical: 20,
    },
    buttonSimple : {
        width: '48%',
        marginRight: '4%',
        borderRadius: 10,
        backgroundColor: '#334FFA',
        paddingVertical: 20,
    },
    
    textTodos: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingL: 40,
        color: 'white',
    },
    containerSimple: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
 
    },
 
  });

// const Footer = ({ filterTrue, filterFalse, notFiltered }) => {
const Footer = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <View style={styles.container} >

      {isFiltered ? (
        <View style={styles.buttonTodos} >
          <TouchableWithoutFeedback
            testID="button-notFiltered"
            onPress={() => {
            //   notFiltered();
            //   setIsFiltered(false);
            }}
          >
            <View>
              <Text
                // style={globalStyles.text}
                style={styles.textTodos}
              >
                Todos
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}




     {!isFiltered ? (
      <View   style={styles.containerSimple}>
          <View  style={styles.buttonSimple}>
                <TouchableWithoutFeedback
                testID="button-filterFalse"
                onPress={() => {
                    // filterFalse();
                    // setIsFiltered(true);
                }}
                >
                    <View >
                    <Text  style={styles.textTodos}
                    >
                    Ganados
                    </Text>
                </View>
                </TouchableWithoutFeedback>
          </View>

          <View  style={styles.buttonSimple}>
                  <TouchableWithoutFeedback
                  testID="button-filterFalse"
                  onPress={() => {
                      // filterFalse();
                      // setIsFiltered(true);
                  }}
                    >
                       <View  >
                        <Text style={styles.textTodos}
                        //   style={globalStyles.text}
                        >
                        Canjeados
                        </Text>
                    </View>
                  </TouchableWithoutFeedback>
          </View>
        </View>
      ) : null} 


    </View>
  );
};

export default Footer;