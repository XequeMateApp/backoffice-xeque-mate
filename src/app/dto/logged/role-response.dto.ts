// export abstract class RoleResponseDto {
//   _id: string;
//   name?: string;
//   administrator?: string;
//   products?: string;
//   kyc?: string;
//   customers?: string;
//   accesscontrol?: string;
//   notifications?: string;
//   status?: string;
// }

export abstract class RoleResponseDto {
  _id: string;
  name?: string;
  roles?: string[];
  status?: string;
}
