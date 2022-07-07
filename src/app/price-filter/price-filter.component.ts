import { Component, Input, Output, OnInit } from "@angular/core";

import { PriceRange } from "../model/priceRange.interface";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
})
export class PriceFilterComponent implements OnInit {
  public priceSelected: number = 0;

  @Input() range: PriceRange = { min: 0, max: 0 };

  @Output()
  priceToFilter: number = 0;

  ngOnInit() {
    this.priceSelected = this.range.max;
  }

  public filterPrice(price: number): void {
    this.priceToFilter = price;
  }
}
