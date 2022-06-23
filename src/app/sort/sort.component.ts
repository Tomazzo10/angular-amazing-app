import { Component, Input, OnInit } from "@angular/core";

import { Item } from "../model/item.interface";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.scss"],
})
export class SortComponent implements OnInit {
  sortOption: string = "Sort";

  @Input()
  items: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortOption = "Sort";
  }

  sort(option: string): void {
    this.sortOption = option;
    if (option === "Title") {
      this.items.sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
    } else if (option === "Description") {
      this.items.sort((a, b) => {
        return a.description < b.description ? -1 : 1;
      });
    }
  }
}
