export abstract class ProductsRegisterResponseDto {
  _id: string;
  name?: string;
  specifications?: string;
  description?: string;
  category?: string[];
  code?: string;
  image?: string[];
  status?: string;
}
