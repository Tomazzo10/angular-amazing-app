import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
} from "@angular/core";

import { SliderConfig } from "../../model/sliderConfig.interface";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  public data!: SliderConfig;
  public value!: number;

  @Input() set config(config: SliderConfig) {
    this.data = config;
    this.value = config.max;
  }

  @Output()
  selectedValue = new EventEmitter<number>();

  public selectValue(value: number): void {
    this.selectedValue.emit(value);
  }
}
