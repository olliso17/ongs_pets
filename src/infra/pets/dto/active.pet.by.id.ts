import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class FindByIdPetInputDto {
  @IsBoolean()
  @ApiProperty({
    description: "Activate or deactivate depending on the value, true or false",
    example: false,
  })
  active: boolean;
}
