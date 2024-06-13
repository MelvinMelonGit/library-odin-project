const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = (read === "read");
}

function addBookToLibrary(...books) {
    myLibrary.push(...books);
}

function displayBookToHTML(myLibrary) {
    const output = document.querySelector('main');
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        //set unique id for each book
        card.dataset.bookId = index

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;

        output.appendChild(card);
        card.append(title, author, pages, read);
    });
}

const book1 = new Book ("book1author", "book1title", 200, "read")
const book2 = new Book ("book2author", "book2title", 100, "not read")
const book3 = new Book ("book3author", "book3title", 300, "read")

addBookToLibrary(book1, book2, book3)
displayBookToHTML(myLibrary)