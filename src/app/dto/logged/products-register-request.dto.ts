export abstract class ProductsRegisterRequestDto {
  name: string;
  code: string;
  specification: string;
  description: string;
  image: string[];
  cnpj: string;
  status: string;
  value: number;
  category: string[];
}
