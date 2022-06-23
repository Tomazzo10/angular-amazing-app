import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FavoriteButtonComponent } from "./favorite-button/favorite-button.component";
import { FavoriteModalComponent } from "./favorite-modal/favorite-modal.component";
import { FavoriteItemListComponent } from "./favorite-item-list/favorite-item-list.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SortComponent } from "./sort/sort.component";
import { PriceFilterComponent } from "./price-filter/price-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    SearchBarComponent,
    ItemsListComponent,
    FavoriteButtonComponent,
    FavoriteModalComponent,
    FavoriteItemListComponent,
    SortComponent,
    PriceFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
