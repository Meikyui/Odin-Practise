// global variables
const myLibrary = [];

//Constructor functions
function Book (title, author, pages, isRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
    }
    Book.prototype.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
    }
     Book.prototype.toggleReadStatus = function(){
        this.isRead = !this.isRead;
}


//DOM elements
const libraryBooks = document.getElementById('LibraryBooks');
const form = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('isRead');


//functions
function seedLibrary(){
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book ('1984', 'George Orwell', 328, false));
addBookToLibrary(new Book('To Kill a Mockingbird', 'Harper Lee', 281, true));
}

function addBookToLibrary(book){
    myLibrary.push(book);
};

function ExamineLibraryContent(){
    libraryBooks.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${book.info()}`;
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.dataset.action = 'delete';
        
        const readButton = document.createElement('button');
        readButton.textContent = book.isRead ? 'Mark as Unread' : 'Mark as Read';
        readButton.dataset.action = 'toggle';

        li.dataset.id = book.id;
        li.appendChild(deleteButton);
        li.appendChild(readButton);
        libraryBooks.appendChild(li);
        
    });
}

function removeBookById(id){
    if(!id) return;
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if(bookIndex !== -1){
        myLibrary.splice(bookIndex, 1);
    }
}

function init(){
    seedLibrary();
    ExamineLibraryContent();
}

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newBook = new Book(
        titleInput.value,
        authorInput.value,
        Number(pagesInput.value),
        isReadInput.checked
    );

    addBookToLibrary(newBook);
    ExamineLibraryContent();
    form.reset();
});

libraryBooks.addEventListener('click', (e) => {
   const btn = e.target.closest('button');
   if (!btn) return;
    
    const li = btn.closest('li');
    if (!li) return;

    const id = li.dataset.id;

    if(btn.dataset.action === 'delete'){
        removeBookById(id);
    }

    if(btn.dataset.action === 'toggle'){
        const book = myLibrary.find(book => book.id === id);
        if (!book) return;
        book.toggleReadStatus();

}
    ExamineLibraryContent();
    
});

//start app
init();

