import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";

import { Item } from "../model/item.interface";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  loadAllItems(): Observable<Item[]> {
    return this.http
      .get<{ items: Item[] }>(
        // TO-DO: change this url to wallapop's beta one
        "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json"
      )
      .pipe(map(res => res.items));
  }
}
