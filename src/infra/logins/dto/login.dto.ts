import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class LoginInputDto {
  @ApiProperty({
    description: "Enter email",
    example: "email@email.com"
  })
  email: string;
  @ApiProperty({
    description: "Enter password",
    example: "123456adas"
  })
  password: string;
  @ApiProperty({
    description: "Enter user id",
    example: randomUUID
  })
  user_id: string;
}

export class LoginOutputDto {
  @ApiProperty({
    description: "Error message or token",
    example: { message: "Error" }
  })
  message: string;
}
