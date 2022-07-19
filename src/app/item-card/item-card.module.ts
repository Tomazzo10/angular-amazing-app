import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemCardComponent } from "./item-card.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ItemCardComponent],
  exports: [ItemCardComponent],
})
export class ItemCardModule {}
