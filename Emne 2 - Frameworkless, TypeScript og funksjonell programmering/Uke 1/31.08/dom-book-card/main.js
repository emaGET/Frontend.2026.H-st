const app = document.querySelector("#app");

const bookCard = document.createElement("article");
bookCard.className = "book-card";

const bookTitle = document.createElement("h2");
bookTitle.textContent = "La Divina Commedia";

const releaseInformation = document.createElement("p");
releaseInformation.textContent = "Released: 1321";

const authorInformation = document.createElement("p");
authorInformation.textContent = "Author: Dante Alighieri"

const addButton = document.createElement("button");
addButton.textContent = "Add to reading list";
addButton.setAttribute("type", "button");

bookCard.append(
    bookTitle,
    releaseInformation,
    authorInformation,
    addButton
);

app.replaceChildren(bookCard);