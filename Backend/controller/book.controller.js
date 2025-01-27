import Book from "../modal/BookModal.js";

const getBook = async (req, res) => {  //this function is used to get the data from database modal
    try {
        const bookdata = await Book.find();
        res.status(200).json(bookdata);   //to make it an api...... we send the data as response of api
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export default getBook;