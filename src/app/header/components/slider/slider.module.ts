import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SliderComponent } from "./slider.component";

@NgModule({
  imports: [FormsModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class SliderModule {}
