import { ShoppingItem } from "../models/shoppingItem";
import * as SQLite from 'expo-sqlite';
import React from "react";

const db = SQLite.openDatabase("shoppcartdb.db")

export const initDb = () => {

    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS cartItems (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    price INTEGER NOT NULL,
                    amount INTEGER NOT NULL,
                    inCart BOOLEAN NOT NULL
            )`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)

            )
        })
    })

}

    ;
// transaction.executeSql(
//     `CREATE TABLE IF NOT EXISTS itemsInCart (
//         id INTEGER PRIMARY KEY NOT NULL,
//         title TEXT NOT NULL,
//         price INTEGER NOT NULL,
//         amount INTEGER NOT NULL,
//         inCart BOOLEAN NOT NULL
// )`, [],
//     (tx, res) => resolve(res),
//     (tx, err) => reject(err)

// )


export const moveFromListToCart = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `UPDATE cartItems SET inCart = 1 WHERE id = ?`, [id],

                [],
                (tx, res) => resolve(console.log(res, " is it now true??"))
                ,
                (tx, err) => reject(console.log(err, "!!!!! err"))
            )
        },
        )
    })
}

export const getTableInfo = () => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {

            transaction.executeSql(
                `pragma table_info('itemsInCart')`, [],
                (tx, res) => resolve(console.log(res), "<------------- res"),
                (tx, err) => reject(err)
            )

        })
    })

}

// export const addToTableForInCart = (item) => {
//     console.log(item, " adding new to items in carts")

//     return new Promise((resolve, reject) => {

//         db.transaction((transaction) => {

//             transaction.executeSql(
//                 `INSERT INTO itemsInCart (title, price, amount, inCart)
//                     VALUES (?, ?, ?, ?)`, [item.title, item.price, item.amount, true],
//                 (tx, res) => resolve(console.log(res, " this is res")),
//                 (tx, err) => reject(console.log("samthing wehen twring"))
//             )
//         })

//     })

// }

export const addToTable = (item) => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {

            transaction.executeSql(
                `INSERT INTO cartItems (title, price, amount, inCart)
                    VALUES (?, ?, ?, ?)`, [item.title, item.price, item.amount, false],
                (tx, res) => resolve(console.log(res, " this is res")),
                (tx, err) => reject(err)
            )
        })

    })

}

export const findById = (id) => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `SELECT * FROM cartItems WHERE id = ?`, [id],
                (tx, res) => resolve(
                    res.rows._array
                        .map(cartItem => new ShoppingItem(cartItem.id, cartItem.title, cartItem.price, cartItem.amount, cartItem.inCart === 1))
                ),
                (tx, err) => reject(err)
            )
        })

    })

}

export const findAll = () => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `SELECT * FROM cartItems`, [],
                (tx, res) => resolve(
                    res.rows._array
                        .map(item => new ShoppingItem(item.id, item.title, item.price, item.amount, item.inCart === 1))
                ),
                (tx, err) => reject(err)
            )
        })

    })

}

// export const findAllInCart = () => {

//     return new Promise((resolve, reject) => {

//         db.transaction((transaction) => {
//             transaction.executeSql(
//                 `SELECT * FROM itemsInCart`, [],
//                 (tx, res) => resolve(
//                     res.rows._array
//                         .map(item => new ShoppingItem(item.id, item.title, item.price, item.amount, item.inCart === 1))
//                 ),
//                 (tx, err) => reject(err)
//             )
//         })

//     })

// }

export const deleteById = (id) => {
    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `DELETE FROM cartItems WHERE id = ?`, [id],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })

    })

}

export const deleteAll = () => { }
