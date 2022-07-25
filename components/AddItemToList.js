import { useState } from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { addToTable } from "../databas/DatabaseUtils"

export default function addItemToList({ item }) {

    const handleAddNewItem = (item) => {
        addToTable(item)
    }

    const openModal = () => {

    }

    return (
        <TouchableHighlight style={styles.container} onPress={openModal}>
            <Text style={styles.text}>+</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin: 5,
        padding: '5px',
        justifyContent: "space-evenly"

    },
    text: {
        fontSize: 80
    }
});