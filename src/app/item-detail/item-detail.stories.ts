import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import { ItemDetailComponent } from "./item-detail.component";

export default {
  title: "Component/Items-Detail",
  component: ItemDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [ItemDetailComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const ItemsDetailStory: Story = () => ({
  props: {
    item: {
      id: "j2vg1n31g313g",
      title: "Wallapop pop pop pop pop",
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
  },
});
