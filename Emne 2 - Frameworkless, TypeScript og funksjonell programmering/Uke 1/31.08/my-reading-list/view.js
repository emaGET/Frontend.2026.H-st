import { model } from "./model.js";
import { addBookToReadingList } from "./controller.js";

function updateView() {
    const app = document.querySelector("#app") ;

    const bookCard = document.createElement("article");
    bookCard.className = "book-card"

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = "La Divina Commedia";

    const authorInformation = document.createElement("p");
    authorInformation.textContent = "Author: Dante Alighieri"

    const booksAdded = document.createElement("p");
    booksAdded.textContent = `Books added: ${model.count}`

    const addButton = document.createElement("button");
    addButton.textContent = "Add to reading list";
    addButton.setAttribute("type", "button");
    addButton.addEventListener("click", addBookToReadingList);

    bookCard.append(
        bookTitle,
        authorInformation,
        booksAdded,
        addButton
    )

    app.replaceChildren(bookCard);

}

export { updateView };