import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { ItemCardComponent } from "./item-card.component";
import { Component, Input } from "@angular/core";
import { Item } from "../model/item.interface";

@Component({
  selector: "app-story-item-card",
  template: `
    <div width="224px" heigth="264px" *ngFor="let item of items">
      <app-item-card [item]="item"></app-item-card>
    </div>
  `,
})
class StoryItemCardComponent {
  @Input() item?: Item[];
}

export default {
  title: "Component/ItemCard",
  component: StoryItemCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [StoryItemCardComponent, ItemCardComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const ItemCardNotFavorited: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100,
          currency: "EUR",
        },
        favorited: false,
      },
    ],
  },
});

export const ItemCardStoryFavorited: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100,
          currency: "EUR",
        },
        favorited: true,
      },
    ],
  },
});

export const ItemCardLongString: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop pop pop pop pop",
        description:
          "This is a very long long long long long long long long long long long long long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100,
          currency: "EUR",
        },
        favorited: false,
      },
    ],
  },
});
