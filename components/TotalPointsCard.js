import {View, Text} from 'react-native';
import React from 'react';
// import { globalStyles } from "../utils/GlobalStyle";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    textCard: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B9898',
    },
    textPoints: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    cardShadow: {
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,

        flexBasis: '70%',
        backgroundColor: '#334FFA',
        borderRadius: 20,
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
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

const TotalPointsCard = ({totalPoinst = 10000}) => {
    const poinst = totalPoinst.toLocaleString('es-ES');
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
