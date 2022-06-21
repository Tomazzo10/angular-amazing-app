import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { favSearchFormGroup } from "../model/favSearchFormGroup";
import { Item } from "../model/item";

@Component({
  selector: "app-favorite-search",
  templateUrl: "./favorite-search.component.html",
  styleUrls: ["./favorite-search.component.scss"],
})
export class FavoriteSearchComponent implements OnInit {
  favSearchForm = new FormGroup<favSearchFormGroup>({
    favSearch: new FormControl<string>("", { nonNullable: true }),
  });

  @Input()
  favItems: Item[] = [];

  constructor() {}

  ngOnInit(): void {}

  onFavSubmit(value: string): void {
    this.favItems.filter(favItem =>
      favItem.title.toLowerCase().includes(value)
    );
  }

  resetFavForm() {
    this.favSearchForm.reset();
  }
}
