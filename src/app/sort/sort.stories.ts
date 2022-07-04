import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { Meta, moduleMetadata, Story } from "@storybook/angular";

import { SortComponent } from "./sort.component";

export default {
  title: "Sort",
  component: SortComponent,
  decorators: [
    moduleMetadata({
      declarations: [SortComponent],
      imports: [NgbDropdownModule],
    }),
  ],
} as Meta;

export const SortStory: Story = () => ({});
