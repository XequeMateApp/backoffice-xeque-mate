// export abstract class RoleRegisterRequestDto {
//   name: string;
//   administrator: string;
//   products: string;
//   kyc: string;
//   customers: string;
//   accesscontrol: string;
//   notifications: string;
//   status: string;
// }


export abstract class RoleRegisterRequestDto {
  name: string;
  roles: string[];
  status: string;
}
