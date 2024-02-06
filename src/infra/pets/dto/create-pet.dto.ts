import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePetInputDto {
  @IsString()
  @IsNotEmpty({ message: "Name is not found" })
  @ApiProperty({
    description: "Enter name",
    example: "Pingo",
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: "Specie is not found" })
  @ApiProperty({
    description: "Enter species",
    example: "dog",
  })
  species: string;

  @IsNumber()
  @ApiProperty({
    description: "Enter age optional",
    example: 2,
  })
  age?: number;

  @IsString()
  @ApiProperty({
    description: "Enter gender",
    example: "female",
  })
  gender: string;

  @IsString()
  @ApiProperty({
    description: "Enter description",
    example: "Very playful and happy",
  })
  description?: string;

  @IsString()
  @ApiProperty({
    description: "Enter image optional",
    example: "pingo.png",
  })
  image?: string;

  @IsString()
  @IsNotEmpty({ message: "Ong id is not found" })
  @ApiProperty({
    description: "Enter ong id",
    example: "Enter the ID of the registered and active ONG",
  })
  ong_id: string;
}
