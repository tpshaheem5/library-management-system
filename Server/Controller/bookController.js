const bookSchema = require("../Model/booksDatabase.js"); 

const addBook = async (req, res) => {
  try {
    const {  title, author,image, isbn, totalCopies, availableCopies } = req.body;
    const existingBook = await bookSchema.findOne({ isbn:isbn });
    
    if (existingBook) {
      return res.status(400).json({ error: "Book with this ISBN already exists" });
    }else{
        const newBook = await bookSchema.create({

            title,
            image,
            author,
            isbn,
            totalCopies,
            availableCopies,
          });
      
          // Save the new book to the database
        //   await newBook.save();
          res.status(201).json({ message: "Book added successfully" ,data:newBook});
    }

    // create a new book instance
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", error_message: error.message });
  }
};

const getAllBooks = async(req,res)=>{
    try {
        const allbooks = await bookSchema.find()
        res.status(200).json(allbooks)
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", error_message: error.message });
    }
}

const  getBookDetails = async (req,res)=>{
    try {
        const bookId = req.params.bookId;
        const bookDetails = await bookSchema.findById(bookId)

        if(!bookDetails){
            return res.status(404).json({error:"Book not found"})
        }
        res.status(200).json(bookDetails)
    } catch (error) {
    console.error(error)
    res.status(500).json({error:"Internal Server error",error_message: error.message})
    }
}

const updateBookDetails = async (req, res) => {
    try {
        const bookId = req.params.bookId; 
        const updateBookDetails = req.body;

        const updatedBook = await bookSchema.findByIdAndUpdate(bookId, updateBookDetails, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({ message: "Book details updated successfully", updatedBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server error", error_message: error.message });
    }
};

const deleteBook = async (req,res)=>{
    try {
        const bookId = req.params.bookId;
        const deletedBook = await bookSchema.findByIdAndDelete(bookId)

        if(!deletedBook){
            return res.status(404).json({error:"Book not found",error_message: error.message})
        }
        res.status(200).json({message:"Book deleted successfully", deletedBook})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})
    }
}

module.exports = { addBook, getAllBooks, getBookDetails, updateBookDetails,deleteBook };
