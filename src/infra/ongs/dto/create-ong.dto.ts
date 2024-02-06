import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { randomUUID } from "crypto";

export class CreateOngInputDto {
  @IsString()
  @IsNotEmpty({ message: "Cnpj is not found" })
  @ApiProperty({
    description: "Enter your valid CNPJ",
    example: "XX.XXX.XXX/0001-XX",
  })
  cnpj: string;

  @IsString()
  @IsNotEmpty({ message: "User id is not found" })
  @ApiProperty({
    description: "Enter user id",
    example: randomUUID(),
  })
  user_id: string;

  @IsString()
  @ApiProperty({
    description: "Enter image",
    example: "linked.png",
  })
  image?: string;

  @IsNumber()
  @ApiProperty({
    description: "Enter maximum pets",
    example: 100,
  })
  maximum_pets?: number;
}

export class MessageErrorDto {
  @IsString()
  @ApiProperty({
    description: "error message",
    example: "credential invalid",
  })
  message: string;
}
