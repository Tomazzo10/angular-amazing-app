import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { Meta, moduleMetadata, Story } from "@storybook/angular";

import { SelectorComponent } from "./selector.component";

export default {
  title: "Selector",
  component: SelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectorComponent],
      imports: [NgbDropdownModule],
    }),
  ],
} as Meta;

export const SelectorStory: Story = () => ({
  props: {
    options: [
      {
        label: "Title",
        value: "title",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Price (lowest first)",
        value: "priceAsc",
      },
      {
        label: "Price (highest first)",
        value: "priceDesc",
      },
    ],
    accessibilityDescription: "optionsToFilterSelector",
    defaultOption: [
      {
        label: "Price (lowest first)",
        value: "priceAsc",
      },
      {
        label: "Price (highest first)",
        value: "priceDesc",
      },
      {
        label: "Title",
        value: "title",
      },
      {
        label: "Description",
        value: "description",
      },
    ],
  },
});
