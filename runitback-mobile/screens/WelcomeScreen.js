import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground  style={styles.background} source={require('../assets/steve.gif')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/templogo.png')} />
                <Text style={styles.tagline}>The newest Hub for fgc content</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => console.log("login pressed")}/>
                <AppButton title='Register' color='secondary' onPress={() => console.log("login pressed")}/>
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    tagline: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 10,
        backgroundColor: "#61dafb",
    }, 
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    }
})

export default WelcomeScreen;