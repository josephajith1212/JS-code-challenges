function Book(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;

}

Book.prototype.getAvailability = function(){
    return (this.numCopies>9? 'In stock' : this.numCopies===0? 'No stock' : 'Low stock') + ` - (${this.numCopies})`;
}

Book.prototype.sell = function(numSold = 1){
    this.numCopies -= numSold;
}

Book.prototype.restock = function(numRestocked = 5){
    this.numCopies += numRestocked;
}

const b1 = new Book('APJ', 'APJ', 12345, 10);
b1.sell()
b1.restock()
console.log(b1.getAvailability());