import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { characters } from '../config/GG_loader';
import colors from '../config/colors';
import Move from '../components/Move';


function CharacterScreen({ character = 'sol' }) {
    let moveComponents = [];
    let moves = characters[character].moves;

    for (let move in moves.normals) {
        moveComponents.push(
            
            <Move 
                title={move} 
                damage={moves.normals[move].damage}
                startup={moves.normals[move].startup}
                active={moves.normals[move].active}
                recovery={moves.normals[move].recovery}
                onblock={moves.normals[move].onblock}
            />
            
        )
    }
    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={characters[character].icon} />
                <Text style={styles.title}>{characters[character].charName}</Text>
            </View>
            <View style={styles.moves}>
                {moveComponents}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        borderRadius: 15,
        backgroundColor: 'rgb(180, 2, 2)',
        marginTop: 30,
        marginHorizontal: 5
    },
    image: {
        width: "100%",
        height: 125,
        borderRadius: 15,
    },
    moves: {
        alignItems: "center",
        // flexDirection: 'row',
        // flexWrap: 'wrap'
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

export default CharacterScreen;