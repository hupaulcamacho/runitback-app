import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { characters } from '../config/GG_loader';
import Card from '../components/Card';
import colors from '../config/colors';

function GGSTScreen(props) {
    let charComponents = [];

    for (let char in characters) {
        charComponents.push(
            <TouchableOpacity onPress={() => console.log("character pressed")}>
                <Card title={characters[char].charName} image={characters[char].icon} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            {charComponents}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingTop: 20
    }
})

export default GGSTScreen;