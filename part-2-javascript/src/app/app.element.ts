import "./app.element.scss";
import { Book } from "./book.interface";
import { filterBooks } from "./book.util";

export class AppElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container pt-4 mx-auto sm:px-6 lg:px-8">
    <!-- Search -->
        <label for="search" class="block text-sm font-medium leading-6 text-gray-900">Quick search</label>
        <div class="relative mt-2 flex items-center">
          <input type="text" name="search" id="search" class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" data-search>
        </div>
    <div>

    <h2 class="text-sm font-medium text-gray-500 py-6">Books</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" data-book-cards-container></ul>

     <template data-book-card-template>
       <li class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex w-16 flex-shrink-0 items-center justify-center bg-[#9BD83A] rounded-l-md text-sm font-medium text-gray-900 hover:text-gray-600" data-initials></div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white hover:text-gray-600">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600" data-title></a><br>
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600" data-author></a>
            <p class="text-gray-500" data-year></p>
          </div>
        </div>
      </li>
     </template>
</div>

    </div>
      `;
    const searchInput = this.querySelector("[data-search]");
    const bookCardTemplate: any = this.querySelector("[data-book-card-template]");
    const bookCardContainer: HTMLDivElement = this.querySelector("[data-book-cards-container]");

    let books = [];

    fetch("assets/books.json")
      .then(res => res.json())
      .then(data => {
        books = data.map((book: Book) => {
          const card = bookCardTemplate.content.cloneNode(true).children[0];
          const initials = card.querySelector("[data-initials]");
          const title = card.querySelector("[data-title]");
          const author = card.querySelector("[data-author]");
          const year = card.querySelector("[data-year]");

          initials.textContent = book.initials;
          title.textContent = book.title;
          author.textContent = book.author;
          year.textContent = book.year;

          bookCardContainer.append(card);

          return { initials: book.initials, title: book.title, author: book.author, year: book.year, element: card };
        });
      });


    // Add a change event listener to the search input field.
    searchInput.addEventListener("input", (e: any) => {
      // Get the search input value.
      const value = e.target.value.toLowerCase();

      // Filter the books array based on the search input value.
      const filteredBooks: Book[] = filterBooks(books, value);

      // Update the visibility of the book elements.
      books.forEach((book) => {
        book.element.classList.toggle("hidden", !filteredBooks.includes(book));
      });

      // Update UI when no books are found

      // Sort books by title or author in ascending or descending order.

    });
  }
}

customElements.define("app-root", AppElement);
