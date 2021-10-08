import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function Card({ title, subtitle, image}) {
    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <Image style={styles.image} source={image} />
                <Text style={styles.title}>{title}</Text>
            </View>


            {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: 'rgb(180, 2, 2)',
        margin: 20,
        alignContent: "center"
    },
    detailsContainer: {
        // padding: 3
    },
    image: {
        width: "100%",
        height: 125,
        borderRadius: 15
    },
    subtitle: {
        color: colors.black,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    title: {
        color: colors.white,
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5
    }
})

export default Card;