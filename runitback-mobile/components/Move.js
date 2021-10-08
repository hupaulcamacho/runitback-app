import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Move({ title, damage, startup, active, recovery, onblock}) {
    return (
        <View style={styles.moveContainer}>
            <Text style={styles.moveTitle}>{title}</Text>
            <Text style={styles.moveText}>Damage: {damage}</Text>
            <Text style={styles.moveText}>Startup: {startup}</Text>
            <Text style={styles.moveText}>Active: {active}</Text>
            <Text style={styles.moveText}>Recovery: {recovery}</Text>
            <Text style={styles.moveText}>On-Block: {onblock}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    moveContainer: {
        borderRadius: 15,
        backgroundColor: 'rgb(180, 2, 2)',
        margin: 15,
        padding: 10,
        // flexDirection: 'row',
        // alignItems: "center",
        justifyContent: "center",
        // height: 50,
        width: "40%",
    },
    moveText: {
        color: colors.white,
        padding: 2,
        fontSize: 15,
    },
    moveTitle: {
        color: colors.white,
        padding: 2,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default Move;