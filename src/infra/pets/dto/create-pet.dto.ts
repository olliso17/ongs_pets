import { ApiProperty } from "@nestjs/swagger";

export class CreatePetInputDto {
    @ApiProperty({
        description: "Enter name",
        example: "Pingo"
    })
    name: string;
    @ApiProperty({
        description: "Enter species",
        example: "dog"
    })
    species: string
    @ApiProperty({
        description: "Enter age optional",
        example: 2
    })
    age?:number
    @ApiProperty({
        description: "Enter gender",
        example: "female"
    })
    gender:string
    @ApiProperty({
        description: "Enter description",
        example: "Very playful and happy"
    })
    description?:string
    @ApiProperty({
        description: "Enter image optional",
        example: "pingo.png"
    })
    image?:string
    @ApiProperty({
        description: "Enter ong id",
        example: "Enter the ID of the registered and active ONG"
    })
    ong_id: string
}