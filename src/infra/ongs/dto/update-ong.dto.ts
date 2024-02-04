import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class UpdateOngInputDto {
    @ApiProperty({
        description: "Enter your valid CNPJ",
        example: "XX.XXX.XXX/0001-XX"
    })
    cnpj: string;
    @ApiProperty({
        description: "Enter user id",
        example: randomUUID()
    })
    user_id: string;
    @ApiProperty({
        description: "Enter name optional",
        example: "Assotiation..."
    })
    name?: string;
    @ApiProperty({
        description: "Enter address optional",
        example: "rua tal..."
    })
    address?: string;
    @ApiProperty({
        description: "Enter city optional",
        example: "Aracaju"
    })
    city?: string;
    @ApiProperty({
        description: "Enter state optional",
        example: "Sergipe or Se"
    })
    state?: string;
    @ApiProperty({
        description: "Enter telephone optional",
        example: "(00)-00000-0000"
    })
    telephone?: string;
    @ApiProperty({
        description: "Enter cep optional",
        example: "00000-000"
    })
    cep?: string;
    @ApiProperty({
        description: "Enter email_ong optional",
        example: "email@email.com"
    })
    email_ong?: string;
    @ApiProperty({
        description: "Enter neighborhood optional",
        example: "Bairro América"
    })
    neighborhood?: string;
    @ApiProperty({
        description: "Enter number_address optional",
        example: "102"
    })
    number_address?: string;
    @ApiProperty({
        description: "Enter image optional",
        example: "link.png"
    })
    image?: string;
    @ApiProperty({
        description: "Enter maximum_pets optional",
        example: 100
    })
    maximum_pets?: number;
}
