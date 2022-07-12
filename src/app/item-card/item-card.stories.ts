import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { ItemCardComponent } from "./item-card.component";

export default {
  title: "Component/ItemCard",
  component: ItemCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ItemCardComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const SearchBarStory: Story = () => ({
  props: {
    item$: {
      id: "j2vg1n31g313g",
      title: "This is the first item",
      description:
        "Here there's a very long description of an item to test how long descriptions are going to work in the application",
      image: "daskdsakdj",
      price: {
        amount: 100,
        currency: "EUR",
      },
      favorited: false,
    },
  },
});
