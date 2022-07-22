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

export const ItemCardSmallImage: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a description of an item to test how long descriptions are going to work in the application",
        image:
          "data:image/png;base64,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",
        price: {
          amount: 100,
          currency: "EUR",
        },
        favorited: false,
      },
    ],
  },
});

export const ItemCardTallImage: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a description of an item to test how long descriptions are going to work in the application",
        image:
          "https://c7.alamy.com/compes/c00jxf/alta-resolucion-panoramica-vertical-del-interior-de-james-r-thompson-center-chicago-illinois-ee-uu-c00jxf.jpg",
        price: {
          amount: 100,
          currency: "EUR",
        },
        favorited: true,
      },
    ],
  },
});
