import { Component, Input } from "@angular/core";

import { Item } from "../model/item.interface";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.scss"],
})
export class ItemDetailComponent {
  @Input() item!: Item;

  public removeFavorite(): void {
    this.item.favorited = false;
  }
  public addFavorite(): void {
    this.item.favorited = true;
  }
}
