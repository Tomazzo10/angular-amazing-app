import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SelectOption } from "../model/selectOption.interface";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
})
export class SelectorComponent {
  public selected: SelectOption = { label: "", value: "" };

  @Input() options: SelectOption[] = [];
  @Input() selectorDescription: string = "";
  @Input() set defaultOption(options: SelectOption[]) {
    this.selected = options[0];
  }

  @Output() optionSelected = new EventEmitter<string>();

  public changeSelected(option: SelectOption): void {
    this.selected = option;
    this.optionSelected.emit(option.value);
  }
}
