import { useState } from "react";
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
} from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';





const DisplayItems = ({ item }) => {

    const [cartItem, setCartItem] = useState(item);


    const Separator = () => <View style={styles.itemSeparator} />;
    const LeftSwipeActions = () => {
        return (
            <View
                style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
            >
                <Text
                    style={{
                        color: '#40394a',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                    }}
                >
                    Bookmark
                </Text>
            </View>
        );
    };
    const rightSwipeActions = () => {
        return (
            <View
                style={{
                    backgroundColor: '#ff8303',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}
            >
                <Text
                    style={{
                        color: '#1b1a17',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                    }}
                >
                    Delete
                </Text>
            </View>
        );
    };
    const swipeFromLeftOpen = () => {
        alert('Swipe from left');
    };
    const swipeFromRightOpen = () => {
        alert('Swipe from right');
    };

    return (
        <GestureHandlerRootView>
            <Swipeable
                renderLeftActions={LeftSwipeActions}
                renderRightActions={rightSwipeActions}
                onSwipeableRightOpen={swipeFromRightOpen}
                onSwipeableLeftOpen={swipeFromLeftOpen}

            >
                <View
                    style={{
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <Text style={{ fontSize: 24 }}>
                        a -------------- a
                    </Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    container: {

    },
    swipeStyle: {
        width: "100%",
        backgroundColor: "green",
        height: 250
    }
})

export default DisplayItems;