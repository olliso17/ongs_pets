import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateDonationInputDto {
  @IsString()
  @ApiProperty({
    description: "Donation description",
    example: "Do I need dog food?",
  })
  description: string;
}
