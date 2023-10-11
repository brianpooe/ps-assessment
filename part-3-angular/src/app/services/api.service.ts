import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Book } from "../models";
import { BehaviorSubject, catchError, Observable, take, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private _books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  books$: Observable<Book[]> = this._books.asObservable();

  private books: Book[] = [];

  getAllBooks$ = this.httpClient.get<Book[]>("/assets/books.json")
    .pipe(
      take(1),
      catchError((error: HttpErrorResponse) => {
        console.error("Something went wrong:", error);
        return throwError(() => new Error("Something went wrong."));
      })
    );

  constructor(private readonly httpClient: HttpClient) {
  }

  loadBooks = (searchTerm: string = "", preload = true): void => {
    if (preload) {
      this.getAllBooks$.subscribe((books: Book[]) => {
        this._books.next(books);
        this.books = books;
      });

      return;
    }

    const filteredBooks: Book[] = this.books.filter((book: Book) =>
      book.author.toLowerCase().includes(searchTerm) ||
      book.title.toLowerCase().includes(searchTerm)
    );
    this._books.next(filteredBooks);
  };
}
