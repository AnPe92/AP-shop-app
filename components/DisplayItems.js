import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AddedToCart from "./AddedToCart";





const DisplayItems = ({ item }) => {

    const [cartItem, setCartItem] = useState(item);


    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <AddedToCart item={cartItem} />
        );
    };

    return (
        <View style={styles.container}>
            <Text>aba</Text>
            <Swipeable
                renderRightActions={renderRightActions}
            >
                <Text
                    style={styles.swipeStyle}
                >asd</Text>
            </Swipeable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "blue"
    },
    swipeStyle: {
        width: "100vw",
        backgroundColor: "yellow"
    }
})

export default DisplayItems;