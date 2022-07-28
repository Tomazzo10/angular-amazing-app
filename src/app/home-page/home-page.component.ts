import { Component, OnInit } from "@angular/core";
import { Item } from "../model/item.interface";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  items!: Item[];
}
