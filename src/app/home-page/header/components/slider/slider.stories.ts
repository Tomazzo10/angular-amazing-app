import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";

import { SliderComponent } from "./slider.component";

export default {
  title: "Component/Slider",
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SliderComponent],
      imports: [FormsModule],
    }),
  ],
} as Meta;

export const SliderPrice: Story = () => ({
  props: {
    config: {
      min: 0,
      max: 1000,
      unit: "€",
      description: "Max price:",
    },
  },
});

export const SliderDistance: Story = () => ({
  props: {
    config: {
      min: 0,
      max: 500,
      unit: "Km",
      description: "Max distance:",
    },
  },
});
