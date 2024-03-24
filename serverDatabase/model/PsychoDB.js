// file: /model/ProductDB.js
import * as mongooseDef from "mongoose";

let mongoose = mongooseDef.default;
var psychoSchema = mongoose.Schema({
        id: String,
        name: String,
        edu: String,
        work: String,
        exp: String,
        img1: String,
        img2: String,
        valueDate: String,
        valueTime: String, 
});

// compile the schema into a model, or a class that we can do things on.
let Data = mongoose.model('Data', psychoSchema, 'psycholist');
export default Data;