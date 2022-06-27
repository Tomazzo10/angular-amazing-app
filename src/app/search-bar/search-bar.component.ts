import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { SearchFormGroup } from "../model/searchFormGroup.interface";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup<SearchFormGroup>({
    search: new FormControl("", { nonNullable: true }),
  });

  @Output()
  search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(value: string) {
    if (value !== "") {
      console.log(value);
      this.search.emit(value.toLowerCase());
    }
  }

  resetForm() {
    this.searchForm.reset();
  }
}
