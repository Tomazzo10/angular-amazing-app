import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
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
  public value!: number;
  public unit!: string;
  public description!: string;

  @Input() set config(config: SliderConfig) {
    this.min = config.min;
    this.max = config.max;
    this.value = config.max;
    this.unit = config.unit;
    this.description = config.description;
  }

  @Output()
  selectedMaxValue = new EventEmitter<number>();

  public selectMaxValue(value: number): void {
    this.selectedMaxValue.emit(value);
  }
}
