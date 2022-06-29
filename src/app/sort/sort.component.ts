import { Component, OnInit } from "@angular/core";

import { SortService } from "../services/sort.service";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.scss"],
})
export class SortComponent implements OnInit {
  sortOption: string = "Sort by";

  // @Input()
  // items: Item[] = [];

  constructor(private sortService: SortService) {}

  ngOnInit() {}

  sortOptions = ["Title", "Description", "PriceDesc", "PriceAsc"];

  sort(option: string): void {
    this.sortOption = option;
    this.sortService.sort(option);
  }
}
