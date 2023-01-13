import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: 60,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    buttonTodos: {
        width: '100%',
        backgroundColor: '#334FFA',
        borderRadius: 10,
        paddingVertical: 20,
    },
    buttonSimple: {
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
        fontFamily: 'Avenir',
    },
    containerSimple: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

const Footer = ({ filterTrue, filterFalse, notFiltered }) => {
    const [isFiltered, setIsFiltered] = useState(false);
    return (
        <View style={styles.container}>
            {isFiltered ? (
                <View style={styles.buttonTodos}>
                    <TouchableWithoutFeedback
                        testID="footer-button-noFilter"
                        onPress={() => {
                            notFiltered();
                            setIsFiltered(false);
                        }}>
                        <View>
                            <Text style={styles.textTodos}>Todos</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            ) : null}

            {!isFiltered ? (
                <View style={styles.containerSimple}>
                    <View style={styles.buttonSimple}>
                        <TouchableWithoutFeedback
                            testID="button-filterFalse"
                            onPress={() => {
                                filterFalse();
                                setIsFiltered(true);
                            }}>
                            <View>
                                <Text style={styles.textTodos}>Ganados</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.buttonSimple}>
                        <TouchableWithoutFeedback
                            testID="button-filterTrue"
                            onPress={() => {
                                filterTrue();
                                setIsFiltered(true);
                            }}>
                            <View>
                                <Text style={styles.textTodos}>Canjeados</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default Footer;
