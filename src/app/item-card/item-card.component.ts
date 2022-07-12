import { Component, Input, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Item } from "../model/item.interface";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"],
})
export class ItemCardComponent {
  private titleSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(
    []
  );

  @Input()
  public item$: Observable<Item[]> = this.titleSubject.asObservable();

  @Output()
  addToFavorite!: string;

  @Output()
  removeFromFavorite!: string;
}
