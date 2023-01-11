import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalPointsCard from '../components/TotalPointsCard';

import MovementsContainer from '../components/Movements';
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
    textMovimientos: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B9898',
    },
});

const MOVEMENTS = 'TUS MOVIMIENTOS';

const HomeScreen = ({navigation}) => {
    const [products, setProducts] = useState([
        {
            createdAt: '2022-12-09T06:34:25.607Z',
            product: 'Handmade Metal Shoes',
            points: 16434,
            image: 'https://loremflickr.com/640/480/transport',
            is_redemption: false,
            id: '1',
        },
        {
            createdAt: '2022-12-09T17:02:51.904Z',
            product: 'Recycled Plastic Tuna',
            points: 92984,
            image: 'https://loremflickr.com/640/480/technics',
            is_redemption: false,
            id: '2',
        },
        {
            createdAt: '2022-12-09T10:20:00.909Z',
            product: 'Fantastic Granite Bacon',
            points: 42416,
            image: 'https://loremflickr.com/640/480/technics',
            is_redemption: false,
            id: '3',
        },
        {
            createdAt: '2022-12-09T00:30:23.966Z',
            product: 'Fantastic Fresh Gloves',
            points: 23913,
            image: 'https://loremflickr.com/640/480/city',
            is_redemption: true,
            id: '4',
        },
        {
            createdAt: '2022-12-08T18:54:56.243Z',
            product: 'Rustic Rubber Bacon',
            points: 69814,
            image: 'https://loremflickr.com/640/480/people',
            is_redemption: true,
            id: '5',
        },
        {
            createdAt: '2022-12-09T14:12:11.097Z',
            product: 'Tasty Concrete Cheese',
            points: 81585,
            image: 'https://loremflickr.com/640/480/business',
            is_redemption: false,
            id: '6',
        },
        {
            createdAt: '2022-12-09T12:50:53.209Z',
            product: 'Oriental Cotton Keyboard',
            points: 88323,
            image: 'https://loremflickr.com/640/480/nightlife',
            is_redemption: false,
            id: '7',
        },
        {
            createdAt: '2022-12-08T20:32:14.169Z',
            product: 'Oriental Soft Pants',
            points: 87794,
            image: 'https://loremflickr.com/640/480/animals',
            is_redemption: true,
            id: '8',
        },
        {
            createdAt: '2022-12-09T05:46:47.645Z',
            product: 'Luxurious Rubber Bacon',
            points: 13063,
            image: 'https://loremflickr.com/640/480/food',
            is_redemption: true,
            id: '9',
        },
        {
            createdAt: '2022-12-09T10:56:34.206Z',
            product: 'Elegant Rubber Fish',
            points: 91311,
            image: 'https://loremflickr.com/640/480/transport',
            is_redemption: false,
            id: '10',
        },
        {
            createdAt: '2022-12-09T12:36:43.169Z',
            product: 'Recycled Wooden Salad',
            points: 44871,
            image: 'https://loremflickr.com/640/480/city',
            is_redemption: false,
            id: '11',
        },
    ]);
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
                <Text style={styles.textMovimientos}>{MOVEMENTS}</Text>
                <MovementsContainer
                    products={products}
                    navigation={navigation}
                />
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
