import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SortOption } from "../model/sortOption.interface";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.scss"],
})
export class SortComponent {
  public sortSelected: string = "Sort by";

  @Input()
  sortOptions: SortOption[] = [];

  @Output()
  optionSelected = new EventEmitter<string>();

  sort(option: SortOption): void {
    this.sortSelected = option.label;
    this.optionSelected.emit(option.value);
  }
}
