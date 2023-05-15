export interface ProductPutRequestDto {
  code: string,
  category: string[],
  description: string,
  specifications: string,
  value: string,
  name: string,
  quantity: number,
  cnpj: string,
  image: string[],
}
