import { ApiProperty } from "@nestjs/swagger";

export class UpdateDonationInputDto {
    @ApiProperty({
        description:"Donation description",
        example: "Do I need dog food?"
    })
    description:string
}
