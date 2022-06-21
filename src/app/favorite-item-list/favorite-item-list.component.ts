import { Component, Input, OnInit } from "@angular/core";
import { Item } from "../model/item";

@Component({
  selector: "app-favorite-item-list",
  templateUrl: "./favorite-item-list.component.html",
  styleUrls: ["./favorite-item-list.component.scss"],
})
export class FavoriteItemListComponent implements OnInit {
  @Input()
  favItems: Item[] = [];

  constructor() {}

  ngOnInit(): void {}
}
