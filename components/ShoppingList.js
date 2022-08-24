import { View, StyleSheet, FlatList } from "react-native"
import { findAll } from "../databas/DatabaseUtils"
import DisplayItems from "./DisplayItems";
import { useState, useEffect } from "react";



export default function ShoppingList({ data, getData }) {

    // useEffect(() => {        
    // }, []);   

    const renderItems = ({ item }) => {
        return (<DisplayItems
            item={item}
            updateData={getData} />)
    }

    const Separator = () => <View style={style.itemSeparator} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <Separator />}
        />
    )

}

const style = StyleSheet.create({
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