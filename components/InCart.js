import { FlatList, View, Text, StyleSheet } from "react-native";
import DisplayItems from "./DisplayItems";


export default function InCart({ data, getData }) {


    const renderItems = ({ item }) => {
        return (<DisplayItems
            item={item}
            updateData={getData} />)

    }

    const Separator = () => <View style={styles.itemSeparator} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <Separator />}
        />
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