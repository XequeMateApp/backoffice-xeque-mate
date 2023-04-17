export class UserAuthenticatedDto {
  constructor(
    public email: string,
    public token: string,
  ) { }
}
