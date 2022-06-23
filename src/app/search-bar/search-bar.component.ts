import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Item } from "../model/item";

import { SearchFormGroup } from "../model/SearchFormGroup";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup<SearchFormGroup>({
    search: new FormControl("", { nonNullable: true }),
  });

  @Input()
  items: Item[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(value: string) {
    this.items.filter(
      item =>
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value)
    );
  }

  resetForm() {
    this.searchForm.reset();
  }
}
