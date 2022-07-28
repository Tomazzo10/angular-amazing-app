import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SelectOption } from "../../../../model/selectOption.interface";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent {
  public allOptions: SelectOption[] = [];
  public selected: SelectOption | null = null;

  @Input() set options(options: SelectOption[]) {
    this.allOptions = options;
    this.selected = options.length ? options[0] : null;
    this.optionSelected.emit(this.selected?.value);
  }
  @Input() selectorDescription: string = "";

  @Output() optionSelected = new EventEmitter<string>();

  public changeSelected(option: SelectOption): void {
    this.selected = option;
    this.optionSelected.emit(option.value);
  }
}
