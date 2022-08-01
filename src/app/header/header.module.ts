import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import { SearchBarModule } from "./components/search-bar/search-bar.module";
import { SelectorModule } from "./components/selector/selector.module";
import { SliderModule } from "./components/slider/slider.module";

@NgModule({
  imports: [SearchBarModule, SelectorModule, SliderModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
