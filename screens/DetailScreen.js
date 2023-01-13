import {
    View,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    Button,
    ScrollView,
    Platform,
} from 'react-native';
import React from 'react';
import { getDate } from '../components/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#CFD6FF',
    },
    noDataContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 6,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000000',
    },
    productContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    detailsContainer: {
        backgroundColor: '#fff',
        height: '100%',
        paddingBottom: Platform.OS === 'android' ? 500 : 350,
    },
    imageContainer: {
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 15 },
        shadowRadius: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    sectionProductDetails: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    textGray: {
        color: '#9B9898',
        fontSize: 14,
        marginBottom: 5,
        fontWeight: '900',
    },
    textLarge: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
        marginTop: 10,
    },
    buttonSeparator: {
        marginTop: 10,
        marginBottom: 10,
    },
    centerItems: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        width: '90%',
        backgroundColor: '#334FFA',
        borderRadius: 10,
        padding: 15,
        marginTop: 60,
    },
    containerBottomText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center',
    },
    textPoints: {
        fontSize: 24,
        fontWeight: '900',
        color: 'black',
        marginTop: 20,
        fontFamily: 'Avenir',
    },
});

const NO_DATA = 'No hay data disponible';

const DetailScreen = ({ route, navigation }) => {
    if (!route || Object.keys(route.params).length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.noDataContainer}>
                    <Text style={styles.textBold}>{NO_DATA}</Text>
                    <Button
                        title="Volver"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </SafeAreaView>
        );
    }

    const { image, product, createdAt, points } = route.params.productItem;
    const dateFormated = getDate(createdAt);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.productContainer}>
                    <Text style={styles.textBold}>{product}</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: image }}
                            accessibilityLabel="image_product"
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.sectionProductDetails}>
                        <Text style={styles.textGray}>
                            Detalles del producto:
                        </Text>
                        <Text style={styles.textLarge}>
                            Comprado el {dateFormated}
                        </Text>
                        <Text style={styles.textGray}>
                            Con esta compra acumulaste:
                        </Text>
                        <Text style={styles.textPoints}>{points} puntos</Text>
                    </View>
                    <View style={styles.buttonSeparator}>
                        <View style={styles.centerItems}>
                            <View style={styles.bottomContainer}>
                                <TouchableWithoutFeedback
                                    onPress={() => navigation.navigate('Home')}>
                                    <View>
                                        <Text
                                            style={styles.containerBottomText}>
                                            Aceptar
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailScreen;
