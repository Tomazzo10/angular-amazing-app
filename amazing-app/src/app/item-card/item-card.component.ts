import { Component, Input, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { Item } from '../model/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input()
  items$: Observable<Item[]> = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items$ = this.itemsService.loadAllItems().pipe(startWith([]));
  }
}
