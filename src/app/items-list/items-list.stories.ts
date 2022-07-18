import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";

import { ItemsListComponent } from "./items-list.component";

export default {
  title: "Component/Items-List",
  component: ItemsListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ItemsListComponent],
      imports: [FormsModule],
    }),
  ],
} as Meta;

export const ItemsList: Story = () => ({
  props: {},
});
