import { ImageDto } from "../dtos/image-dto";

export interface Item {
  id: string;
  category_id: string;
  currency: string;
  title: string;
  description: string;
  images: ImageDto[];
  price: number;
  type_attributes?: string; // TO-DO: check this one
  slug: string;
  reserved?: { flag: boolean };
  favorited?: { flag: boolean };
  bump?: { type: string };
}
