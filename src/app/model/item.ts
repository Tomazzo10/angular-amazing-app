import { ImageDto } from '../dtos/image-dto';
import { PriceDto } from '../dtos/price-dto';

export interface Item {
  id: string;
  category_id: string;
  title: string;
  description: string;
  images: ImageDto[];
  price: PriceDto;
  type_attributes?: string; // TO-DO: check this one
  slug: string;
  reserved?: { flag: boolean };
  favorited?: { flag: boolean };
  bump?: { type: string };
}
