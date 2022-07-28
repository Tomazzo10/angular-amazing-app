import { NgModule } from "@angular/core";

import { HomePageComponent } from "./home-page.component";
import { HeaderModule } from "./header/header.module";
import { ItemsListModule } from "./items/items-list/items-list.module";

@NgModule({
  imports: [HeaderModule, ItemsListModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}
