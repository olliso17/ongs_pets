import { ApiProperty } from "@nestjs/swagger";

export class FindByIdDonationInputDto {
    @ApiProperty({
        description:"Activate or deactivate depending on the value, true or false",
        example:false
    })
    active:boolean
}