const myLibrary = []

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = (read === "read")
}

function addBookToLibrary(...books) {
    myLibrary.push(...books)
}

function displayBookToHTML(myLibrary) {

}

const book1 = new Book ("book1", "book1title", 200, "read")
const book2 = new Book ("book2", "book2title", 100, "not read")
const book3 = new Book ("book3", "book3title", 300, "read")

addBookToLibrary(book1, book2, book3)
console.log(myLibrary)