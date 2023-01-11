import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalPointsCard from '../components/TotalPointsCard';

// import MovementsContainer from "../components/MovementsContainer";
// import productServise from "../api/product-service";
// import { globalStyles } from "../utils/GlobalStyle";
// import {
//   getTotalPoints,
//   getMovementsByis_redemptionTrue,
//   getMovementsByis_redemptionFalse,
// } from "../utils/index";

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
    },
    textMovimientos: {
        color: '#718096',
        fontSize: 50,
        fontWeight: 'bold',
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
});

const HomeScreen = ({navigation}) => {
    //   const [products, setProducts] = useState([]);
    //   const [productBackup, setProductBackup] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);
    const [loading, setLoading] = useState(false);

    //   const handleFilterMovementsTrue = () => {
    //     const movements = getMovementsByis_redemptionTrue(productBackup);
    //     setProducts(movements);
    //   };

    //   const handleFilterMovementsFalse = () => {
    //     const movements = getMovementsByis_redemptionFalse(productBackup);
    //     setProducts(movements);
    //   };

    //   const handleMovementsAll = () => {
    //     setProducts(productBackup);
    //   };

    //   const fetchData = async () => {
    //     const data = await productServise.getProducts();
    //     setProducts(data.data);
    //     setProductBackup(data.data);
    //     setLoading(false);
    //   };

    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    //   useEffect(() => {
    //     const total = getTotalPoints(productBackup);
    //     setTotalPoints(total);
    //   }, [productBackup]);

    if (loading) {
        return (
            <SafeAreaView style={styles.loaderContainer}>
                <Text style={styles.text}>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionTop}>
                <Header />
            </View>
            <View style={styles.sectionTop2}>
                <TotalPointsCard />
            </View>
            <View style={styles.sectionMiddle}>
                <Text
                //   style={globalStyles.text}
                >
                    TUS MOVIMIENTOS
                </Text>
                {/* <MovementsContainer products={products} navigation={navigation} /> */}
            </View>
            <View style={styles.sectionBottom}>
                <Footer
                //   filterTrue={handleFilterMovementsTrue}
                //   filterFalse={handleFilterMovementsFalse}
                //   notFiltered={handleMovementsAll}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
