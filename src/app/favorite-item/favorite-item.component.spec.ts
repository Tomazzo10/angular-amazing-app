import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteItemsListComponent } from "./favorite-item.component";

describe("FavoriteItemsListComponent", () => {
  let component: FavoriteItemsListComponent;
  let fixture: ComponentFixture<FavoriteItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteItemsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
