// file: /model/ProductDB.js
import * as mongooseDef from "mongoose";

let mongoose = mongooseDef.default;
var articleSchema = mongoose.Schema({
        id: String,
        title: String,
        author: String,
        date: String,
        content: String,
        img1: String,
        img2: String,
});

// compile the schema into a model, or a class that we can do things on.
let ArticleData = mongoose.model('ArticleData', articleSchema, 'articlelist');
export default ArticleData;