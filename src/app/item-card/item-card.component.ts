import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../model/item.interface";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"],
})
export class ItemCardComponent {
  public itemData!: Item;

  @Input() set item(item: Item) {
    this.itemData = item;
  }

  @Output()
  addToFavorite = new EventEmitter<string>();

  @Output()
  removeFromFavorite = new EventEmitter<string>();
}
