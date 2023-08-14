const bookInfo = document.querySelector(".myForm");
const myTitle = document.querySelector("#title");
const myAuthor = document.querySelector("#author");
const list = document.querySelector(".bookList");
const button = document.querySelector("#myBtn");

let myBooks = [
    {
        title: "Unexpected Joy At Dawn",
        author: "Alex Agyei Agyiri",
        read: false
    },
    {
        title: "The Immortal Life Of Henrietta Lacks",
        author: "Rebecca Skloot",
        read: false
    },
    {
        title: "The Lion And The Jewel",
        author: "Wole Soyinka",
        read: false
    }
];

displayBooks();

bookInfo.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTitle = myTitle.value;
    let newAuthor = myAuthor.value;
    let addedBook; 
    if (newTitle && newAuthor) {
        addedBook = {
            title: newTitle,
            author: newAuthor,
            read: false
        };
    } else {
        alert("Please fill out all inputs");
    };
    myBooks.push(addedBook);
    clearFormInputs();
    displayBooks();
});

function displayBooks() {
    list.innerHTML = ""
    let readStatusChecker;
    let thisTitle;
    let thisAuthor;
    for (let i = 0; i < myBooks.length; i++) {
       thisTitle = myBooks[i].title;
       thisAuthor = myBooks[i].author;
       readStatusChecker = myBooks[i].read ? "read" : "unread";
       list.innerHTML += `<li>${thisTitle} by ${thisAuthor} <span><button class = "readStatus">${readStatusChecker}</button></span></li>` 
    }
}

function clearFormInputs() {
    myTitle.value = "";
    myAuthor.value = "";
}

let clickElements;
let clickedBtn;
list.addEventListener("click", function(event){
    clickElements = list.querySelector(".readStatus");
    clickedBtn = Array.from(clickElements).indexOf(clickElements);
    if (clickedBtn > -1) {
        myBooks[clickedBtn].read == !myBooks[clickedBtn].read
    }
})
    
