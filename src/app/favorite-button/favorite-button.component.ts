import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorite-button",
  templateUrl: "./favorite-button.component.html",
  styleUrls: ["./favorite-button.component.scss"],
})
export class FavoriteButtonComponent implements OnInit {
  constructor() {}
  // TO-DO: openModal should come as input from parent
  public openModal = false;

  ngOnInit(): void {}

  openFavModal() {
    this.openModal = true;
  }
}
