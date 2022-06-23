import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
})
export class PriceFilterComponent implements OnInit {
  min: number = 0;
  max: number = 100;
  priceSelected: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
