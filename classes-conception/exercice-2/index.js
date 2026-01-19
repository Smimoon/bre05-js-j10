class Book {
    title;
    author;
    publiDate;
    pageNumber;
    copyNumber;
    
    constructor(title, author, publiDate, pageNumber, copyNumber){
        this.title = title;
        this.author = author;
        this.publiDate = publiDate;
        this.pageNumber = pageNumber;
        this.copyNumber = copyNumber;
    }
    
    howManyBooks() {
        if(this.copyNumber > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    
    isThisBookAvailable() {
        if(this.howManyBooks() === true) {
            return console.log(`${this.title} écrit par ${this.author} et publié le ${this.publiDate} est bien disponible à l'achat dans notre magasin.`);
        }
        else {
            return console.log(`${this.title} écrit par ${this.author} et publié le ${this.publiDate} n'est malheureusement plus disponible à l'achat dans notre magasin.`);
        }
    }
}

let book1 = new Book('La Séquence Aardtman', 'Saul Pandelakis', '15 octobre 2021', '648 pages', 43);
console.log(book1.isThisBookAvailable());

let book2 = new Book('Rebecca', 'Daphne du Maurier', '5 août 1938', '377 pages', 0);
console.log(book2.isThisBookAvailable());