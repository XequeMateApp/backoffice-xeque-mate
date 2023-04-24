export class UserGetResponseDto {
  _id: string;
  email?: string;
  name?: string;
  phone?: string;
  password: string;
  status: string;
  roles?: string[];
}
