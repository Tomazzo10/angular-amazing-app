import { Injectable, Input } from "@angular/core";
import { Item } from "../model/item.interface";

@Injectable({
  providedIn: "root",
})
export class SortService {
  @Input()
  items: Item[] = [];

  constructor() {}

  sort(option: string): void {
    if (option === "Title") {
      this.items.sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
    } else if (option === "Description") {
      this.items.sort((a, b) => {
        return a.description < b.description ? -1 : 1;
      });
    } else if (option === "PriceDesc") {
      this.items.sort((a, b) => {
        return a.price < b.price ? 1 : -1;
      });
    } else if (option === "PriceAsc") {
      this.items.sort((a, b) => {
        return a.price < b.price ? -1 : 1;
      });
    }
  }
}
