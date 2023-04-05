export abstract class ProductsRegisterRequestDto {
  name: string;
  code: string;
  specification: string;
  description: string;
  image: File[];
  cnpj: string;
  status: string;
  value: string;
  category: string[];
}
