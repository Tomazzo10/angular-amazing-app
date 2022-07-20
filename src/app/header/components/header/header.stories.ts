import { Meta, Story } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./header.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { SelectorComponent } from "../selector/selector.component";
import { SliderComponent } from "../slider/slider.component";

export default {
  title: "Combining/Header",
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SearchBarComponent, SelectorComponent, SliderComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = args => ({
  props: args,
  template: `
  <div>
  <div class="d-flex justify-content-between">
    <img class="rounded" width="40px" height="40px" src="https://play-lh.googleusercontent.com/zbQSHTc9DGlNkV8sqyVQCiE7H700fJi3dwfcKypbLcBz81N15RiL7RacGmFM70uVhaO6"/>
    <app-search-bar class="w-100"></app-search-bar>
  </div>
  <div class="d-flex justify-content-around align-items-center">
    <app-slider class="w-50" [config]="config"></app-slider>
    <app-selector
      class="w-50 d-flex justify-content-center"
      [options]="options"
      [selectorDescription]="accessibilityDescription"
    ></app-selector>
  </div>
</div>

    `,
});

export const HeaderStory = Template.bind({});

HeaderStory.args = {
  config: {
    min: 0,
    max: 1000,
    unit: "€",
    description: "Max price:",
  },
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
};
