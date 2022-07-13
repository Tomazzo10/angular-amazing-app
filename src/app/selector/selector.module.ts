import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { SelectorComponent } from "./selector.component";

@NgModule({
  imports: [CommonModule, NgbDropdownModule],
  declarations: [SelectorComponent],
  exports: [SelectorComponent],
})
export class SelectorModule {}
