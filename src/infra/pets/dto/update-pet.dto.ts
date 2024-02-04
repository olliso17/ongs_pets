import { ApiProperty } from "@nestjs/swagger";

export class UpdatePetInputDto{
    @ApiProperty({
        description: "Enter name optional",
        example: "Pingo"
    })
    name?: string;
    @ApiProperty({
        description: "Enter species optional",
        example: "dog"
    })
    species?: string
    @ApiProperty({
        description: "Enter age optional",
        example: 2
    })
    age?:number
    @ApiProperty({
        description: "Enter gender optional",
        example: "female"
    })
    gender?:string
    @ApiProperty({
        description: "Enter description optional",
        example: "Very playful and happy"
    })
    description?:string
    @ApiProperty({
        description: "Enter image optional",
        example: "pingo.png"
    })
    image?:string
    @ApiProperty({
        description: "Enter ong id optional",
        example: "Enter the ID of the registered and active ONG"
    })
    ong_id?: string
}
