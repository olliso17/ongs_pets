import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UpdatePetInputDto {
  @IsString()
  @ApiProperty({
    description: "Enter name optional",
    example: "Pingo",
  })
  name?: string;

  @IsString()
  @ApiProperty({
    description: "Enter species optional",
    example: "dog",
  })
  species?: string;

  @IsNumber()
  @ApiProperty({
    description: "Enter age optional",
    example: 2,
  })
  age?: number;

  @IsString()
  @ApiProperty({
    description: "Enter gender optional",
    example: "female",
  })
  gender?: string;

  @IsString()
  @ApiProperty({
    description: "Enter description optional",
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
  @ApiProperty({
    description: "Enter ong id optional",
    example: "Enter the ID of the registered and active ONG",
  })
  ong_id?: string;
}
