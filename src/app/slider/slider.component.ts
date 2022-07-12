import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";

import { SliderConfig } from "../model/sliderConfig.interface";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  public min!: number;
  public max!: number;
  public valueSelected!: number;
  public unit!: string;
  public description!: string;

  @Input() set config(config: SliderConfig) {
    this.min = config.min;
    this.max = config.max;
    this.valueSelected = config.max;
    this.unit = config.unit;
    this.description = config.description;
  }

  @Output()
  selectedMaxValue!: number;

  public selectMaxValue(value: number): void {
    this.selectedMaxValue = value;
  }
}
