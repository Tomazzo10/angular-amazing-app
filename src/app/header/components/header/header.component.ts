import { Component } from "@angular/core";
import { SliderConfig } from "src/app/model/sliderConfig.interface";
import { SelectOption } from "src/app/model/selectOption.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public config!: SliderConfig;
  public options!: SelectOption[];
  public accessibilityDescription: string = "";

  constructor() {}

  ngOnInit(): void {}
}
