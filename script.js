const myLibrary = [];

const container = document.querySelector("#books-container");
const dialog = document.querySelector("#book-dialog");
const openDialogButton = document.querySelector("#open-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const bookForm = document.querySelector("#book-form");

function Book(title, author, pagesNumber, isFinish) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.isFinish = isFinish ? "Terminé" : "En cours";
}

function addBookToLibrary(title, author, pagesNumber, isFinish) {
    const newBook = new Book(title, author, pagesNumber, isFinish);
    myLibrary.push(newBook);
    renderBooks();
}

function createBookCard(book, index) {
    const newBookCard = document.createElement("article");
    newBookCard.classList.add("book-card");

    const title = document.createElement("h2");
    title.textContent = book.title;
    newBookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Auteur : ${book.author}`;
    newBookCard.appendChild(author);

    const pagesNumber = document.createElement("p");
    pagesNumber.textContent = `Pages : ${book.pagesNumber}`;
    newBookCard.appendChild(pagesNumber);

    const isFinish = document.createElement("p");
    isFinish.textContent = `Statut : ${book.isFinish}`;
    newBookCard.appendChild(isFinish);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = () => removeBook(index);
    newBookCard.appendChild(deleteButton);

    return newBookCard;
}

function addBookDialog(){

}
function renderBooks() {
    container.textContent = "";
    myLibrary.forEach((book, index) => {
        container.appendChild(createBookCard(book, index));
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pagesNumber = document.querySelector("#pagesNumber").value;
    const isFinish = document.querySelector("#isFinish").checked;

    addBookToLibrary(title, author, pagesNumber, isFinish);
    
    dialog.close();
    bookForm.reset();
});

openDialogButton.addEventListener("click", () => dialog.showModal());
closeDialogButton.addEventListener("click", () => dialog.close());

addBookToLibrary("L'Étranger", "Albert Camus", 123, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Le Petit Prince", "Antoine de Saint-Exupéry", 96, true);
