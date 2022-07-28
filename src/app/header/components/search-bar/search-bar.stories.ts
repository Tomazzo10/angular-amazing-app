import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SearchBarComponent } from "./search-bar.component";

export default {
  title: "Component/SearchBar",
  component: SearchBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SearchBarComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

export const SearchBarStory: Story = () => ({});
