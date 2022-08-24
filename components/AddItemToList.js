import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableHighlight, Modal, TextInput } from "react-native"
import { fetchDataFromDB } from "./ShoppingList";
import { addToTable, findAll } from "../databas/DatabaseUtils"
import { ShoppingItem } from "../models/shoppingItem";

export default function addItemToList({ updateList }) {

    const [modalVisibility, setModalVisibilty] = useState(false);
    const [textChange, setTextChange] = useState('');
    const [numberChange, setNumberChange] = useState('');
    const [priceChange, setPriceChange] = useState('');

    const [itemToAdd, setItemToAdd] = useState();




    const handleAddNewItem = () => {

        const item = new ShoppingItem(0, textChange, priceChange, numberChange, false);

        addToTable(item)
            .then(() => { updateList }

            )

            .catch(err => console.log(err))


    }

    const openModal = () => {
        setModalVisibilty(!modalVisibility)
    }

    return (
        <View>
            <Modal visible={modalVisibility}>
                <Text> in modal</Text>
                <TextInput
                    onChangeText={text => setTextChange(text)}
                    value={textChange.toString()}
                    placeholder="Produkt namn"

                />
                <TextInput
                    onChangeText={amount => setNumberChange(amount)}
                    value={numberChange.toString()}
                    placeholder="Antal"
                    keyboardType="numeric"

                />
                <TextInput
                    onChangeText={price => setPriceChange(price)}
                    value={priceChange.toString()}
                    placeholder="Pris"
                    keyboardType="numeric"

                />
                <TouchableHighlight onPress={handleAddNewItem}>
                    <Text>Lägg till vara</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={openModal}>
                    <Text>Close Modal</Text>
                </TouchableHighlight>

            </Modal>
            <TouchableHighlight style={styles.container} onPress={openModal}>

                <Text style={styles.text}>+</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {


    },
    text: {

    }
});