export abstract class ProductsRegisterResponseDto {
  _id: string;
  name?: string;
  code?: string;
  specifications?: string;
  description?: string;
  image?: string[];
  cnpj?: string;
  status?: string;
  value?: string;
  category?: string[];
}
