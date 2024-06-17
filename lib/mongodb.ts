// import mongoose from "mongoose";

// global.mongoose = {
//     conn.null,
//     promise:null
// }

// export async function dbConnect(){
//     if (global.mongoose && global.mongoose.conn){
//         console.log("Connected")
//         return global.mongoose.conn
//     }
//     else{
//         const conString = process.env.MONGO_URI;

//         const promise = mongoose.connect(conString, {
//             autoIndex:true
//         });

//         global.mongoose={
//             conn: await promise,
//             promise
//         }

//         console.log("Newly connected")

//         return await promise
//     }
// }

import mongoose, { Mongoose } from "mongoose";

interface GlobalMongoose {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: GlobalMongoose;
}

global.mongoose = {
    conn: null,
    promise: null,
};

export async function dbConnect(): Promise<Mongoose> {
    if (global.mongoose && global.mongoose.conn) {
        console.log("Connected");
        return global.mongoose.conn;
    } else {
        const conString = process.env.MONGO_URI;
        if (!conString) {
            throw new Error("MONGO_URI environment variable not defined");
        }

        const promise = mongoose.connect(conString, {
            autoIndex: true,
        });

        global.mongoose = {
            conn: await promise,
            promise,
        };

        console.log("Newly connected");

        return await promise;
    }
}
