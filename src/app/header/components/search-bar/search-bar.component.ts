import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { SearchFormGroup } from "../../../model/searchFormGroup.interface";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  public searchForm = new FormGroup<SearchFormGroup>({
    search: new FormControl("", { nonNullable: true }),
  });
  public resetIconFlag: boolean = false;

  @Output()
  searchValue = new EventEmitter<string>();

  constructor() {
    this.searchBarChangeDetection();
  }

  private searchBarChangeDetection(): void {
    this.searchForm.get("search")?.valueChanges.subscribe(selectedValue => {
      this.resetIconFlag = !!selectedValue.length;
    });
  }

  public onSubmit(): void {
    this.searchValue.emit(this.searchForm.get("search")?.value);
  }

  public resetForm(): void {
    this.searchForm.reset();
    this.resetIconFlag = false;
  }
}
