import { View, Text } from "react-native"

const DisplayItems = ({ items }) => {
    return (
        <View>
            <Text>{items[1].name}</Text>
        </View>
    )
}

export default DisplayItems;