import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class LogoutDto {
    @IsNotEmpty()
    @ApiProperty({
        description: "Enter token",
        example: "123456adas",
    })
    token: string
}