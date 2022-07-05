import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { SearchBarComponent } from "./search-bar.component";

export default {
  title: "SearchBar",
  component: SearchBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const SearchBarStory: Story = () => ({});
