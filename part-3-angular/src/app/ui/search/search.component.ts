import { Component, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { distinctUntilChanged, filter } from "rxjs";

@Component({
  selector: "payspace-search",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  search = new FormControl("");

  @Output() searchText = this.search.valueChanges.pipe(
    filter(Boolean),
    distinctUntilChanged()
  );
}
