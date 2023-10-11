// Create a function to filter the books array based on the search input value.
import { Book } from "./book.interface";

export const filterBooks = (books: Book[], searchTerm: string) => {
  return books.filter((book: Book) => {
    return book.author.toLowerCase().includes(searchTerm) ||
      book.title.toLowerCase().includes(searchTerm);
  });
};
