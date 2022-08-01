import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { HeaderComponent } from "./header.component";
import { SearchBarModule } from "./components/search-bar/search-bar.module";
import { SelectorModule } from "./components/selector/selector.module";
import { SliderModule } from "./components/slider/slider.module";

export default {
  title: "Combining/Header",
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [SearchBarModule, SelectorModule, SliderModule],
    }),
  ],
} as Meta;

export const HeaderStory: Story = () => ({});
