import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";

import { PriceFilterComponent } from "./price-filter.component";

export default {
  title: "Component/Price filter",
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
    range: {
      min: 0,
      max: 1000,
    },
  },
});
