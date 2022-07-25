import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { HomePageComponent } from "./home-page.component";
import { HeaderModule } from "./header/header.module";
import { ItemsListModule } from "./items/items-list/items-list.module";

export default {
  title: "Combining/Header",
  component: HomePageComponent,
  decorators: [
    moduleMetadata({
      declarations: [HomePageComponent],
      imports: [HeaderModule, ItemsListModule],
    }),
  ],
} as Meta;

export const HeaderStory: Story = () => ({});
