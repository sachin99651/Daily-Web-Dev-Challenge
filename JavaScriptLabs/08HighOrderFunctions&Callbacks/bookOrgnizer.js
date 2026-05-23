const books = [
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Catcher in the Rye", authorName: "J.D. Salinger", releaseYear: 1951 },
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);