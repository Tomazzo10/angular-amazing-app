import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, startWith } from "rxjs";
import { Item } from "../model/item.interface";
import { ItemsService } from "../services/items.service";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"],
})
export class ItemCardComponent implements OnInit {
  private titleSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(
    []
  );

  @Input()
  public items$: Observable<Item[]> = this.titleSubject.asObservable();

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items$ = this.itemsService.loadAllItems().pipe(startWith([]));
  }
}
