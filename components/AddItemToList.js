import { useState } from "react"
import { View, Text, StyleSheet, TouchableHighlight, Modal, TextInput } from "react-native"
import { addToTable } from "../databas/DatabaseUtils"

export default function addItemToList({ item }) {

    const [modalVisibility, setModalVisibilty] = useState(false);
    const [textChange, setTextChange] = useState();
    const [numberChange, setNumberChange] = useState();

    const handleAddNewItem = (item) => {
        addToTable(item)
    }

    const openModal = () => {
        setModalVisibilty(!modalVisibility)
    }

    return (
        <View>
            <Modal visible={modalVisibility}>
                <Text> in modal</Text>
                <TextInput
                    onChangeText={setTextChange}
                    value={textChange}
                    placeholder="Produkt namn"
                    autoFocus={true}
                    autoCapitalize={'words'}
                />
                <TextInput
                    onChangeText={setNumberChange}
                    value={numberChange}
                    placeholder="Antal"
                    keyboardType="numeric"
                />
            </Modal>
            <TouchableHighlight style={styles.container} onPress={openModal}>

                <Text style={styles.text}>+</Text>
            </TouchableHighlight>
        </View>
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