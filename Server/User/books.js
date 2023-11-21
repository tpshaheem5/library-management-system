const bookSchema = require("../Model/booksDatabase")

const getAllBooks = async (req,res)=>{
    try {
        const allBooks = await bookSchema.find()
        res.status(200).json(allBooks)
    } catch (error) {
      console.error(error)
      res.status(500).json({error:"Internal Server error"})  
    }
}

const getBookDetails  = async (req,res)=>{
    try {
        const bookId = req.params.bookId;
        const detailsbook = await bookSchema.findById(bookId)
        
        if(!detailsbook){
            return res.status(404).json({error:"Book not found"})
        }
        res.status(200).json(detailsbook)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})
    }
}

// const searchBooks = async (req,res)=>{
//     try {
//         const { title, author, isbn } = req.query;
//         const searchQuery = {};
//         if (title) searchQuery.title = new RegExp(title, "i");
//         if (author) searchQuery.author = new RegExp(author, "i");
//         if (isbn) searchQuery.isbn = isbn;

//         const searchResults = await bookSchema.find(searchQuery);

//         res.status(200).json(searchResults);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server error" });
//     }
// }

module.exports = {getAllBooks,getBookDetails }