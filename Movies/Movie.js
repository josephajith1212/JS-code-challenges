class Movie{
    constructor(name, genre, director, releaseYear, rating){
        this.name = name,
        this.genre = genre,
        this.director = director,
        this.releaseYear = releaseYear,
        this.rating = rating
    }

    getOverview(){
        return `${this.name}, a ${this.genre} file directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
    }
}

const m1 = new Movie('The Matrix', 'Sci-fi', 'WB', 2000, 10);
// console.log(m1.getOverview())

function Movies(name, genre, director, releaseYear, rating){
    this.name = name;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movies.prototype.getOverview = function(){
    return `${this.name}, a ${this.genre} file directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
}

const m2 = new Movies('The Matrix', 'Sci-fi', 'WB', 2000, 10)
console.log(m2.getOverview())