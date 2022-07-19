import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { ItemsListComponent } from "./items-list.component";
import { ItemCardModule } from "../item-card/item-card.module";

export default {
  title: "Component/Items-List",
  component: ItemsListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ItemsListComponent],
      imports: [ItemCardModule],
    }),
  ],
} as Meta;

export const ItemsListStory: Story = () => ({
  props: {
    items: [
      {
        id: "j2vg1n31g313g",
        title: "Wallapop pop pop pop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100,
          currency: "BRL",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description: "This is a description",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 1000,
          currency: "EUR",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a long long long long long long long long long long long long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 1,
          currency: "GBP",
        },
        favorited: true,
      },
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
      {
        id: "j2vg1n31g313g",
        title: "Wallapop pop pop pop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 10,
          currency: "EUR",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description: "This is a description",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100000,
          currency: "EUR",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop pop pop pop",
        description: "This is a description",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 1,
          currency: "GBP",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 10,
          currency: "EUR",
        },
        favorited: true,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description: "This is a description",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 10000,
          currency: "BRL",
        },
        favorited: false,
      },
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
      {
        id: "j2vg1n31g313g",
        title: "Wallapop",
        description:
          "This is a long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 100,
          currency: "GBP",
        },
        favorited: false,
      },
      {
        id: "j2vg1n31g313g",
        title: "Wallapop pop pop pop",
        description:
          "This is a long long long long long long long long long long long long description of an item to test how long descriptions are going to work in the application",
        image:
          "https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6",
        price: {
          amount: 1000,
          currency: "USD",
        },
        favorited: true,
      },
    ],
  },
});
