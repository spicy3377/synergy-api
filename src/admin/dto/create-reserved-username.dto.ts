export class CreateReservedUsernameDto {
  username: string;
  user_id?: number;
}

export class ValidateAdminDto {
  email: string;
  password: string;
}

// src/admin/dto/create-admin.dto.ts
export class CreateAdminDto {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}
