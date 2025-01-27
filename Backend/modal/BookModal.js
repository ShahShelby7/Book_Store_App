import mongoose from "mongoose";
const bookSchema = mongoose.Schema({   //here this mongoose is already connected to database with link in index.js
    name: String,
    title: String,
    price: Number,
    category: String,
    imgURL: String
});

const Book = mongoose.model("Book", bookSchema);  //this modal(Structure) of Book collection
export default Book;