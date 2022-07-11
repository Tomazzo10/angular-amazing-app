import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";

import { PriceRange } from "../model/priceRange.interface";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceFilterComponent {
  public definedRange!: PriceRange;
  public priceSelected!: number;

  @Input() set range(range: PriceRange) {
    this.definedRange = range;
    this.priceSelected = range.max;
  }

  @Output()
  priceToFilter!: number;

  public filterPrice(price: number): void {
    this.priceToFilter = price;
  }
}
