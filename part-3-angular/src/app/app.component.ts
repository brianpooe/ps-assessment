import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "./ui/search/search.component";
import { BookComponent } from "./ui/book/book.component";
import { ApiService } from "./services/api.service";
import { Observable } from "rxjs";
import { Book } from "./models";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [SearchComponent, BookComponent, CommonModule],
  selector: "payspace-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  books$: Observable<Book[] | null> = this.apiService.books$;

  constructor(private readonly apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.loadBooks();
  }

  searchText(searchTerm: string = ""): void {
    this.apiService.loadBooks(searchTerm, false);
  }
}
