export interface ProductPutRequestDto {
  code: string,
  category: string[],
  description: string,
  specifications: string,
  value: string,
  name: string,
  cnpj: string,
  image: string[],
  measure_unit: string,

}
