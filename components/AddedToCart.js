import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"



export default function AddedToCart({ item }) {

    const handleAddToCart = () => {
        item.inCart = true;
        console.log(item, " <.......")
    }

    return (
        <TouchableOpacity
            onPress={handleAddToCart}
        >
            <Text>XXX</Text>
        </TouchableOpacity >
    )
}