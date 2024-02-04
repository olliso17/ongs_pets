import { ApiProperty } from "@nestjs/swagger"
import { randomUUID } from "crypto"

export class CreateDonationInputDto {
    @ApiProperty({
        description:"You have to get the ID of a registered ONG",
        example: randomUUID()
    })
    ong_id :string
    @ApiProperty({
        description:"Donation description",
        example: "Do I need dog food?"
    })
    description:string
}
