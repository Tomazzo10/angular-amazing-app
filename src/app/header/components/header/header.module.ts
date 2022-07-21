import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { SelectorModule } from "../selector/selector.module";
import { SliderModule } from "../slider/slider.module";

@NgModule({
  imports: [CommonModule, SearchBarModule, SelectorModule, SliderModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
