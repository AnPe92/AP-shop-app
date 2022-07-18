import { ShoppingItem } from "../models/shoppingItem";
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("shoppcartdb.db")

export const initDb = () => {

    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS cartItems (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    amount INTEGER NOT NULL,
                    inCart BOOLEAN NOT NULL
            )`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)

            )
        })
    })

}

export const getTableInfo = () => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {

            transaction.executeSql(
                `pragma table_info('cartItems')`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )

        })
    })

}

export const findById = (id) => { }

export const findAll = () => { }

export const deleteById = (id) => { }

export const deleteAll = () => { }
