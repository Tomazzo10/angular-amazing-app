import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
})
export class PriceFilterComponent {
  min: number = 0;
  max: number = 100;
  priceSelected: number = 0;

  @Output()
  priceToFilter: number = 0;

  filterPrice(price: number): void {
    setTimeout(() => (this.priceToFilter = price), 500);
  }
}
