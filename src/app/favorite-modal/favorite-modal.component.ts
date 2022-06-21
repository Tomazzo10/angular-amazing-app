import { Component, Input, OnInit } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-favorite-modal",
  templateUrl: "./favorite-modal.component.html",
  styleUrls: ["./favorite-modal.component.scss"],
})
export class FavoriteModalComponent implements OnInit {
  closeResult: string = "";

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    this.modalService.open({ ariaLabelledBy: "modal-basic-title" }).result.then(
      res => {
        this.closeResult = `Closed with: ${res}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
