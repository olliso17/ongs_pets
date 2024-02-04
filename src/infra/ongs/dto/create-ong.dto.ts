import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateOngInputDto {
  @ApiProperty({
    description: "Enter your valid CNPJ",
    example: "XX.XXX.XXX/0001-XX"
  })
  cnpj: string;
  @ApiProperty({
    description: "Enter user id",
    example: randomUUID()
  })
  user_id: string;
  @ApiProperty({
    description: "Enter image",
    example: "linked.png"
  })
  image?: string;
  @ApiProperty({
    description: "Enter maximum pets",
    example: 100
  })
  maximum_pets?: number;
}

export class MessageErrorDto {
  @ApiProperty({
    description: "error message",
    example: "credential invalid"
  })
  message: string
}