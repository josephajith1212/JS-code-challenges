class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability(){
        return this.getAvailability();
    }

    getAvailability(){
        return (this.numCopies>9? 'In stock' : this.numCopies===0? 'No stock' : 'Low stock') + ` - (${this.numCopies})`;
    }

    sell(numSold = 1){
        this.numCopies -= numSold;
    }

    reStock(numRestock = 5){
        this.numCopies += numRestock;
    }
}

B2 = new Book('ABC', 'xyz', 625382, 8)
B2.reStock(2)
// console.log(B2.availability);

module.exports = Book;