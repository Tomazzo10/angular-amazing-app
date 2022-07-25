import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { SearchBarModule } from "./components/search-bar/search-bar.module";
import { SelectorModule } from "./components/selector/selector.module";
import { SliderModule } from "./components/slider/slider.module";

@NgModule({
  imports: [CommonModule, SearchBarModule, SelectorModule, SliderModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
