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
  public searchBoxValue: string | undefined = "";
  public resetIconFlag: boolean = false;

  @Output()
  searchValue = new EventEmitter<string>();

  public onSubmit(): void {
    this.searchValue.emit(this.searchForm.get("search")?.value);
  }

  public resetForm(): void {
    this.searchForm.reset();
    this.resetIconFlag = false;
  }

  public onChange(): void {
    this.searchBoxValue = this.searchForm.get("search")?.value;
    this.searchBoxValue?.length
      ? (this.resetIconFlag = true)
      : (this.resetIconFlag = false);
  }
}
