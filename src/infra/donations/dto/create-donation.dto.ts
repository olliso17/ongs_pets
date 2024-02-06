import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { randomUUID } from "crypto";

export class CreateDonationInputDto {
  @IsString()
  @IsNotEmpty({ message: "Ong id is not found" })
  @ApiProperty({
    description: "You have to get the ID of a registered ONG",
    example: randomUUID(),
  })
  ong_id: string;

  @IsString()
  @ApiProperty({
    description: "Donation description",
    example: "Do I need dog food?",
  })
  description: string;
}
