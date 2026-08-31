import { model } from "./model.js" ;
import { updateView } from "./view.js" ;

function addBookToReadingList() {
    model.count += 1 ;
    updateView();
}

export { addBookToReadingList } ;