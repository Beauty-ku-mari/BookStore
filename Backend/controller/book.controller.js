import Book from "../model/bookModel.js";

export const getBook = async(req, res) => {
    try {
        // Uncomment the following line to fetch data from the database
        const book = await Book.find();
        

        // Send the data as a JSON response
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
