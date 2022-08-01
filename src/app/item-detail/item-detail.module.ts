import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemDetailComponent } from "./item-detail.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ItemDetailComponent],
  exports: [ItemDetailComponent],
})
export class ItemsDetailModule {}
