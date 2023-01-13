import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {getDate} from './utils';
// import {globalStyles} from '../utils/GlobalStyle';
import {
    ChevronRightIcon,
    PlusSmallIcon,
    MinusSmallIcon,
} from 'react-native-heroicons/mini';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    imageContainer: {
        flexBasis: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        overflow: 'hidden',
    },
    poductContainer: {
        flexBasis: '50%',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
    },
    textBold: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
    textSmall: {
        fontSize: 12,
        fontFamily: 'Avenir',
    },
    pointsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexBasis: '30%',
    },
});

const MovementListItem = ({productItem = {}, navigation}) => {
    if (!productItem || Object.keys(productItem).length === 0) {
        return null;
    }
    const {image, product, createdAt, points, is_redemption} = productItem;
    const dateFormated = getDate(createdAt);
    const isRedemptionIcon =
        is_redemption === true ? (
            <MinusSmallIcon testID="minus-icon" size={30} color="red" />
        ) : (
            <PlusSmallIcon testID="plus-icon" size={30} color="green" />
        );

    return (
        <TouchableWithoutFeedback
            testID="movement-item"
            onPress={() =>
                navigation.navigate('Detail', {
                    productItem,
                })
            }>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        accessibilityLabel="Image product item"
                        source={{uri: image}}
                        className="w-full h-full rounded-xl"
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.poductContainer}>
                    <Text style={styles.textBold} numberOfLines={1}>
                        {product}
                    </Text>
                    <Text style={styles.textSmall} numberOfLines={1}>
                        {dateFormated}
                    </Text>
                </View>
                <View style={styles.pointsContainer}>
                    {isRedemptionIcon}
                    <Text style={styles.textBold}>{points}</Text>
                    <ChevronRightIcon
                        testID="chevron-icon"
                        size={30}
                        color="#000"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MovementListItem;
