import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FavoriteButtonComponent } from "./favorite-button/favorite-button.component";
import { FavoriteModalComponent } from "./favorite-modal/favorite-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FavoriteItemComponent } from "./favorite-item/favorite-item.component";
import { FavoriteSearchComponent } from "./favorite-search/favorite-search.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    SearchBarComponent,
    ItemsListComponent,
    FavoriteButtonComponent,
    FavoriteModalComponent,
    FavoriteItemComponent,
    FavoriteSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
