import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemsListComponent } from "./items-list.component";
import { ItemCardModule } from "../item-card/item-card.module";

@NgModule({
  imports: [CommonModule, ItemCardModule],
  declarations: [ItemsListComponent],
  exports: [ItemsListComponent],
})
export class ItemsListModule {}
