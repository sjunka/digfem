import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalPointsCard from '../components/TotalPointsCard';
import MovementsContainer from '../components/Movements';
import useFetchData from '../hooks/useFetchData';

import {
    getTotalPoints,
    getTrueMovements,
    getFalsyMovements,
} from '../components/utils';

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#F8F8F8',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#F8F8F8',
    },
    sectionTop: {
        flexBasis: '10%',
        paddingHorizontal: 20,
    },
    sectionTop2: {
        flexBasis: '25%',
        paddingHorizontal: 20,
    },
    sectionMiddle: {
        flexBasis: '55%',
        paddingHorizontal: 20,
    },
    sectionBottom: {
        flexBasis: '16%',
    },
    textMovimientos: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B9898',
        marginTop: 20,
        fontFamily: 'Avenir',
    },
});

const MOVEMENTS = 'TUS MOVIMIENTOS';

const HomeScreen = ({ navigation }) => {
    const URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';

    const [products, setProducts] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    const [productMutable, setProductMutable] = useState([]);

    const { data, loading } = useFetchData(URL);

    const filteredMovements = () => {
        const movements = getTrueMovements(productMutable);
        setProducts(movements);
    };

    const filteredMovementsFalse = () => {
        const movements = getFalsyMovements(productMutable);
        setProducts(movements);
    };

    const showMovements = () => {
        setProducts(productMutable);
    };

    useEffect(() => {
        if (data) {
            setProducts(data);
            setProductMutable(data);
        }
    }, [data]);

    useEffect(() => {
        const total = getTotalPoints(productMutable);
        setTotalPoints(total);
    }, [productMutable]);

    useEffect(() => {
        setProducts(products);
    }, [products]);

    if (loading) {
        return (
            <SafeAreaView style={styles.loaderContainer}>
                <Text style={styles.text}>Cargando tus puntos...</Text>
            </SafeAreaView>
        );
    }
    var totalPoints2 = 100

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionTop}>
                <Header />
            </View>
            <View style={styles.sectionTop2}>
                <TotalPointsCard totalPoints={totalPoints2} />
            </View>
            <View style={styles.sectionMiddle}>
                <Text style={styles.textMovimientos}>{MOVEMENTS}</Text>
                <MovementsContainer
                    products={products}
                    navigation={navigation}
                />
            </View>
            <View style={styles.sectionBottom}>
                <Footer
                    filterTrue={filteredMovements}
                    filterFalse={filteredMovementsFalse}
                    notFiltered={showMovements}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
