import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./components/header/header.component";
import { SearchBarModule } from "./components/search-bar/search-bar.module";
import { SelectorModule } from "./components/selector/selector.module";
import { SliderModule } from "./components/slider/slider.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarModule,
    SelectorModule,
    SliderModule,
    NgbDropdownModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
