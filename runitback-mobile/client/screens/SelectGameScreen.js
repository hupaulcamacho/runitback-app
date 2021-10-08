import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function SelectGameScreen(props) {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/GGST.png')}/>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/MBTL.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: '40%',
        width: '40%'
    }
})

export default SelectGameScreen;