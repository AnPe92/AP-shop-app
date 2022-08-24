import { useState, useEffect } from "react";
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
import { findAll, moveFromListToCart, deleteById } from "../databas/DatabaseUtils";




export default function DisplayItems({ item, updateData }) {


    const [cartItem, setCartItem] = useState(item);



    //handle click if true delete else move to incartlist <--------
    const handelPress = () => {
        if (cartItem.inCart) {
            deleteById(cartItem.id)
        } else {
            moveFromListToCart(cartItem.id)
        }
        updateData();
    }

    // const LeftSwipeActions = () => {
    //     return (
    //         <View
    //             style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    //         >
    //             <Text
    //                 style={{
    //                     color: '#40394a',
    //                     paddingHorizontal: 10,
    //                     fontWeight: '600',
    //                     paddingHorizontal: 30,
    //                     paddingVertical: 20,
    //                 }}
    //             >
    //                 Bookmark
    //             </Text>
    //         </View>
    //     );
    // };
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
                    onPress={handelPress}
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


    return (
        <GestureHandlerRootView>
            <Swipeable
                renderRightActions={rightSwipeActions}
                renderLeftActions={null}


            >
                <View
                    style={{
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <Text style={{ fontSize: 24 }}>
                        {cartItem.title}
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



