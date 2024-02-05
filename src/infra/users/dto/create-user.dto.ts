import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateUserInputDto {
    @ApiProperty({
        description: "Enter name",
        example: "Francisco"
    })
    name: string;
    @ApiProperty({
        description: "Enter email",
        example: "email@example.com"
    })
    email: string;
    @ApiProperty({
        description: "Enter password",
        example: "123456abc@4"
    })
    password: string;
}

export class CreateUserOutputDto {
    @ApiProperty({
        description: "Enter message optional",
        example: "created successfully"
    })
    message?: string;
    @ApiProperty({
        description: "Enter token optional",
        example: randomUUID()
    })
    token?: string;
}