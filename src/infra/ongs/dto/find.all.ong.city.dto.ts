import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllOngCityDto{
    @IsString()
    @IsNotEmpty({ message: "City is not found" })
    @ApiProperty({
        description: "Enter you city",
        example: "Aracaju",
    })
    city:string;
}