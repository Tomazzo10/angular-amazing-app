import { Component, OnInit } from "@angular/core";
import { SliderConfig } from "src/app/model/sliderConfig.interface";
import { SelectOption } from "src/app/model/selectOption.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public config!: SliderConfig;
  public options!: SelectOption[];
  public accessibilityDescription: string = "";

  ngOnInit() {
    this.config = {
      min: 0,
      max: 1000,
      unit: "€",
      description: "Max price:",
    };
    this.options = [
      {
        label: "Title",
        value: "title",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Price (lowest first)",
        value: "priceAsc",
      },
      {
        label: "Price (highest first)",
        value: "priceDesc",
      },
    ];
    this.accessibilityDescription = "optionsToFilterSelector";
  }
}
