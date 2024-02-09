import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { randomUUID } from "crypto";

export class UpdateOngInputDto {
  @IsString()
  @ApiProperty({
    description: "Enter your valid CNPJ",
    example: "XX.XXX.XXX/0001-XX",
  })
  cnpj: string;

  @IsString()
  @ApiProperty({
    description: "Enter user id",
    example: randomUUID(),
  })
  user_id: string;

  @IsString()
  @ApiProperty({
    description: "Enter name optional",
    example: "Assotiation...",
  })
  name?: string;

  @IsString()
  @ApiProperty({
    description: "Enter address optional",
    example: "rua tal...",
  })
  address?: string;

  @IsString()
  @ApiProperty({
    description: "Enter city optional",
    example: "Aracaju",
  })
  city?: string;

  @IsString()
  @ApiProperty({
    description: "Enter state optional",
    example: "Sergipe or Se",
  })
  state?: string;

  @IsString()
  @ApiProperty({
    description: "Enter telephone optional",
    example: "(00)-00000-0000",
  })
  telephone?: string;

  @IsString()
  @ApiProperty({
    description: "Enter cep optional",
    example: "00000-000",
  })
  cep?: string;

  @IsEmail()
  @ApiProperty({
    description: "Enter email_ong optional",
    example: "email@email.com",
  })
  email_ong?: string;

  @IsString()
  @ApiProperty({
    description: "Enter neighborhood optional",
    example: "Bairro América",
  })
  neighborhood?: string;

  @IsString()
  @ApiProperty({
    description: "Enter number_address optional",
    example: "102",
  })
  number_address?: string;

  @IsString()
  @ApiProperty({
    description: "Enter image optional",
    example: "link.png",
  })
  image?: string;

  @IsNumber()
  @ApiProperty({
    description: "Enter maximum_pets optional",
    example: 100,
  })
  maximum_pets?: number;
}
