import { View, Text, Platform } from 'react-native';
import React from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    textCard: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B9898',
        fontFamily: 'Avenir',
    },
    textPoints: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: Platform.OS === 'android' ? 20 : 0,
        fontFamily: 'Avenir',
    },
    cardShadow: {
        flex: 1,
        flexBasis: '70%',

        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,

        backgroundColor: '#334FFA',
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Avenir',
    },

    pointsThingy: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    pointsWrapper: {
        margin: 20,
    },
});

const MONTH = 'Diciembre';
const YOUR_POINTS = 'TUS PUNTOS';

const TotalPointsCard = ({ totalPoints = 0 }) => {
    const poinst = totalPoints.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (
        <View style={styles.container}>
            <Text style={styles.textCard}>{YOUR_POINTS}</Text>
            <View style={styles.cardShadow}>
                <View style={styles.pointsWrapper}>
                    <Text style={styles.text}>{MONTH}</Text>
                    <View style={styles.pointsThingy}>
                        <Text numberOfLines={1} style={styles.textPoints}>
                            {`${poinst} pts`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TotalPointsCard;
