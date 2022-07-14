import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../model/item.interface";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"],
})
export class ItemCardComponent {
  private maxDescriptionLength: number = 150;
  private maxTitleLength: number = 14;
  public itemData!: Item;
  public description!: string;
  public title!: string;

  @Input() set item(item: Item) {
    this.itemData = item;

    this.description =
      item.description.length > this.maxDescriptionLength
        ? this.limitDescription(item.description)
        : item.description;

    this.title =
      item.title.length > this.maxTitleLength
        ? item.title.substring(0, this.maxTitleLength) + "..."
        : item.title;
  }

  @Output()
  addToFavorite = new EventEmitter<Item>();

  @Output()
  removeFromFavorite = new EventEmitter<Item>();

  public addFavorite(item: Item): void {
    this.addToFavorite.emit(item);
  }

  public removeFavorite(item: Item): void {
    this.removeFromFavorite.emit(item);
  }

  private limitDescription(description: string): string {
    const descriptionLimited = description.substring(
      0,
      this.maxDescriptionLength
    );
    const descriptionTrimmed = description.substring(
      0,
      Math.min(descriptionLimited.length, descriptionLimited.lastIndexOf(" "))
    );
    const trimmedWithEllipsis = descriptionTrimmed + "...";
    return trimmedWithEllipsis;
  }
}
