import { View, Text, FlatList, StyleSheet } from "react-native";
import DisplayItems from "../components/DisplayItems";
import { useState, useEffect } from "react";
import data from "../assets/tempData/tempData"
import { findAll } from "../databas/DatabaseUtils";
import AddItemToList from "../components/AddItemToList";

const Home = () => {

    const [items, setItems] = useState(data);

    const Separator = () => <View style={styles.itemSeparator} />;


    const renderItems = ({ itemsa }) => {

        return (
            <DisplayItems
                item={itemsa}
            />
        )
    }


    return (
        <View>
            <Text>as</Text>
            <AddItemToList />
            <FlatList
                data={items}
                renderItem={renderItems}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <Separator />}
            />

        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: '#444',
    },
});


export default Home;