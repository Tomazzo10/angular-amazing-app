import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SearchBarComponent } from "./search-bar.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
