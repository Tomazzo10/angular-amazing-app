import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}

  resetForm() {
    this.searchForm.reset();
  }
}
