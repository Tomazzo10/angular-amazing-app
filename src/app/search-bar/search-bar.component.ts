import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Item } from "../model/item";

import { searchFormGroup } from "../model/searchFormGroup";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup<searchFormGroup>({
    search: new FormControl<string>("", { nonNullable: true }),
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
