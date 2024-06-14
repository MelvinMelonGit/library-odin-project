const myLibrary = [];

const newBookButton = document.querySelector('button.new-book');

const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

newBookButton.addEventListener('click', function() {
    dialog.show();
})

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const reading = document.querySelector('input[name="reading"]:checked').value;

    const book = new Book(author, title, pages, reading);
    addBookToLibrary(book);
}


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = (read === "read");
}

Book.prototype.changeRead = function() {
    return !this.read;
}

function addBookToLibrary(...books) {
    myLibrary.push(...books);
    displayBookToHTML();
}

function deleteBookFromLibrary(e) {
    const deleteButton = e.target.closest('button[data-delete]');
    const card = deleteButton?.parentElement.dataset.bookId;
    if (!deleteButton) return;
    myLibrary.splice(card, 1);
    displayBookToHTML();
}

function changeBookReadStatus(e) {
    const readStatusButton = e.target.closest('button[data-read]');
    const card = readStatusButton?.parentElement.dataset.bookId;
    if (!readStatusButton) return;
    //invert the read status
    myLibrary[card].read = !myLibrary[card].read;
    displayBookToHTML();
}


function displayBookToHTML() {
    const output = document.querySelector('section');
    output.innerHTML = '';
    output.addEventListener('click', deleteBookFromLibrary);
    output.addEventListener('click', changeBookReadStatus);

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete';
        deleteButton.dataset.delete = 'delete';

        const readButton = document.createElement('button');

        readButton.textContent = 'Change Read Status';
        readButton.dataset.read = 'read';

        //set unique id for each book
        card.dataset.bookId = index;

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;

        output.appendChild(card);
        card.append(title, author, pages, read, readButton, deleteButton);
    });
}

const book1 = new Book ("book1author", "book1title", 200, "read");
const book2 = new Book ("book2author", "book2title", 100, "not read");
const book3 = new Book ("book3author", "book3title", 300, "read");

addBookToLibrary(book1, book2, book3);
displayBookToHTML();