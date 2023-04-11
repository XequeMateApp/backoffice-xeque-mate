export interface ProductPutRequestDto {
  name: string;
  code: string;
  specifications: string;
  description: string;
  image: string[];
  status: string;
  cnpj: string;
  value: string;
}
