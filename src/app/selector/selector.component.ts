import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SelectOption } from "../model/selectOption.interface";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
})
export class SelectorComponent {
  public selected: string = "Sort by";

  @Input()
  options: SelectOption[] = [];

  @Output()
  optionSelected = new EventEmitter<string>();

  public sort(option: SelectOption): void {
    this.selected = option.label;
    this.optionSelected.emit(option.value);
  }
}
