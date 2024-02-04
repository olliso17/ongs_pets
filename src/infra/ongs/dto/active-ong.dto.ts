import { ApiProperty } from "@nestjs/swagger";

export class FindByIdOngInputDto {
    @ApiProperty({
        description:"Activate or deactivate depending on the value, true or false",
        example:false
    })
    active:boolean
}
