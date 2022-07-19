import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Item } from "../model/item.interface";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"],
})
export class ItemsListComponent {
  @Input()
  items$: Item[] = [];

  @Output()
  itemData = new EventEmitter<Item>();
}
