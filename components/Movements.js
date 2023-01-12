import {View, FlatList, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import MovementListItem from './MovementListItem';

// import {globalStyles} from '../utils/GlobalStyle';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textNoData: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9B9898',
    },
    movementListItemContainer: {
        width: '100%',
        height: 60,
    },
    flatlistContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 4,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 6,
        marginBottom: 40,
        marginHorizontal: 6,
    },
});

const NO_DATA = 'No hay movimientos';

const Movements = ({products = [], navigation}) => {
    return (
        <View
            style={styles.flatlistContainer}
            className="flex-1 bg-white my-4 rounded-xl py-6 px-3">
            {products?.length === 0 || products === undefined ? (
                <Text style={styles.textNoData}>{NO_DATA}</Text>
            ) : null}

            <FlatList
                testID="flatlist-movements"
                data={products}
                renderItem={({item}) => {
                    return (
                        <View style={styles.movementListItemContainer}>
                            <MovementListItem
                                testID="movement-item"
                                key={item.id + item.createdAt}
                                productItem={item}
                                navigation={navigation}
                            />
                        </View>
                    );
                }}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default Movements;
