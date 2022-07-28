import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { SearchFormGroup } from "../../../../model/searchFormGroup.interface";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
  public searchForm = new FormGroup<SearchFormGroup>({
    search: new FormControl("", { nonNullable: true }),
  });

  @Output()
  search = new EventEmitter<string>();

  public onSubmit(value: string) {
    this.search.emit(value);
  }

  public resetForm() {
    this.searchForm.reset();
  }
}
