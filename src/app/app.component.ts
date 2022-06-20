import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './model/item';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {}
}
