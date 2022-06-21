import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../model/item";

@Component({
  selector: "app-favorite-items-list",
  templateUrl: "./favorite-item.component.html",
  styleUrls: ["./favorite-item.component.scss"],
})
export class FavoriteItemComponent implements OnInit {
  @Input()
  item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
