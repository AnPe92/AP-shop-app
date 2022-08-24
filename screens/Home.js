import { View, Text, StyleSheet } from "react-native";
import { findAll } from "../databas/DatabaseUtils";
import { useState, useEffect } from "react";
import AddItemToList from "../components/AddItemToList";
import ShoppingList from "../components/ShoppingList";
import InCart from "../components/InCart";


export default function Home() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemsOnList, setItemsOnList] = useState();
    const [itemsInCart, setItemsInCart] = useState([]);

    const fetchData = async () => {

        setLoading(true)
        let itemsInDb = await findAll();
        setItems(itemsInDb)

        let itemsAreinCart = await itemsInDb.filter(item => item.inCart === true)
            .sort((a, b) => a.title - b.title)
        let itemsAreOnList = await itemsInDb.filter(item => item.inCart === false)
            .sort((a, b) => a.title - b.title);

        setItemsInCart(itemsAreinCart)
        setItemsOnList(itemsAreOnList)
        setLoading(false)


    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        loading ? <Text>...Loading...</Text> :

            <View style={styles.container}>
                <Text>SHOPPING LIST</Text>
                <AddItemToList />
                <ShoppingList
                    data={itemsOnList}
                    getData={fetchData}
                />
                <Text>Already in cart --</Text>
                <InCart
                    data={itemsInCart}
                    getData={fetchData}
                />
            </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: '#444',
    },
    scrollview: {
        flexGrow: 1
    }
});


