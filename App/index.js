// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = ['A', 'B', 'C', 'D', 'E'];

export default function App() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const showNextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
            <TouchableOpacity style={styles.button} onPress={showNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});