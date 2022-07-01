import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";

import { PriceFilterComponent } from "./price-filter.component";

export default {
  title: "Price filter",
  component: PriceFilterComponent,
  decorators: [
    moduleMetadata({
      declarations: [PriceFilterComponent],
      imports: [FormsModule],
    }),
  ],
} as Meta;

export const PriceFilter: Story = () => ({
  props: {
    label: "Price filter",
    primary: true,
  },
});
