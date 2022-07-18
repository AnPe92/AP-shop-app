import { View, Text } from "react-native";
import DisplayItems from "../components/DisplayItems";
import data from "../assets/tempData/tempData"
import { useState } from "react";

const Home = () => {

    const [items, setItems] = useState(data);



    return (
        <View>
            <DisplayItems items={items} />
        </View>
    )



}

export default Home;