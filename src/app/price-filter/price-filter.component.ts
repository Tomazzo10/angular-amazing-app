import { Component, Output } from "@angular/core";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
})
export class PriceFilterComponent {
  public min: number = 0;
  public max: number = 1000;
  public priceSelected: number = 0;

  @Output()
  priceToFilter: number = 0;

  public filterPrice(price: number): void {
    this.priceToFilter = price;
  }
}
