class Book {
  constructor(title, author, ISBN, isIssued=false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }
  issueBook() { this.isIssued = true; }
  returnBook() { this.isIssued = false; }
}
const books = [
  new Book("Book A", "Author A", "111"),
  new Book("Book B", "Author B", "222", true),
  new Book("Book C", "Author C", "333")
];
console.log("Available:", books.filter(b => !b.isIssued));
function issueByISBN(isbn){
  const book = books.find(b => b.ISBN === isbn);
  if(book) book.issueBook();
}
