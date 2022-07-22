import { NgModule } from "@angular/core";

import { ItemsListComponent } from "./items-list.component";
import { ItemCardModule } from "../item-card/item-card.module";

@NgModule({
  imports: [ItemCardModule],
  declarations: [ItemsListComponent],
  exports: [ItemsListComponent],
})
export class ItemsListModule {}
