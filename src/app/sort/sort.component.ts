import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

interface Options {
  label: string;
  value: string;
}

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.scss"],
})
export class SortComponent {
  sortSelected: string = "Sort by";
  sortOptions = [
    {
      label: "Sort by",
      value: "sortBy",
    },
    {
      label: "Title",
      value: "title",
    },
    {
      label: "Description",
      value: "description",
    },
    {
      label: "Price: lowest first",
      value: "priceAsc",
    },
    {
      label: "Price: highest first",
      value: "priceDesc",
    },
  ];

  @Output()
  optionSelected = new EventEmitter<string>();

  sort(option: Options): void {
    this.sortSelected = option.label;
    this.optionSelected.emit(option.value);
  }
}
