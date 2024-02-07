import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllOngStateDto{
    @IsString()
    @IsNotEmpty({ message: "State is not found" })
    @ApiProperty({
        description: "Enter you state",
        example: "SE",
    })
    state:string;
}