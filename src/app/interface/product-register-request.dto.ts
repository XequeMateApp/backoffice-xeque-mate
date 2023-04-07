export interface ProductRegisterRequestDto {
    name: string;
    code: string;
    specifications: string;
    description: string;
    image: string[];
    status: string;
    cnpj: string;
    value: string;
    category: string[];
}
