const Book = require('./BookStoreClass')
class NewBook extends Book{
    // super (edition){
    //     this.edition = edition;
    // }
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies)
        this.edition = edition;
    }

    getEdition(){
        return `The current version of this book is ${this.edition}`
    }
}

B2 = new NewBook('ABC', 'xyz', 625382, 11, 4)
console.log(B2.getEdition())
console.log(B2.getAvailability())