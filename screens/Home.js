import { View, Text, FlatList } from "react-native";
import DisplayItems from "../components/DisplayItems";
import { useState, useEffect } from "react";
import data from "../assets/tempData/tempData"
import { findAll } from "../databas/DatabaseUtils";
import AddItemToList from "../components/AddItemToList";

const Home = () => {

    const [items, setItems] = useState(data);


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
            />

        </View>
    )



}

export default Home;