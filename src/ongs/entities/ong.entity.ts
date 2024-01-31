import BaseEntity from "../../base/base.entity";
import OngInterface from "./ong.entity.interface";
import {
  CnpjValidate,
  NumberRegex,
  StringNotNullAndBlankSpace,
  ValidateCep,
} from "../../util/verify.regex";
import { PetEntity } from "src/pets/entities/pet.entity";
import { Column, Entity, OneToMany } from "typeorm";

type OngProps = {
  name: string;
  cnpj: string;
  address: string;
  neighborhood: string;
  state: string;
  number_address: string;
  cep: string;
  user_id: string;
  telephone: string;
  maximum_pets?: number | 0;
  image?: string | "";
  pets?: PetEntity[] | [];
};
@Entity()
export class Ong extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
    name: string;

  @Column({ type: 'varchar', length: 12 })
    cnpj: string;

  @Column({ type: 'varchar', length: 300 })
    address: string;

  @Column({ type: 'varchar', length: 50 })
    neighborhood: string;

  @Column({ type: 'varchar', length: 50 })
    state: string;

  @Column({ type: 'varchar', length: 10 })
    number_address: string;

  @Column({ type: 'varchar', length: 15 })
    cep: string;

  @Column({ type: 'varchar', length: 300 })
    user_id: string;

  @Column({ type: 'varchar', length: 300 })
    telephone: string;

  @Column({ type: 'integer', default:0})
    maximum_pets: number;

  @Column({ type: 'varchar', length: 300,  default:""})
    image: string;
  
  @OneToMany(() => PetEntity, (pet) => pet.ong_id)
    pets: PetEntity[];

    constructor(props: OngProps) {
      super();
      Object.assign(this, props);
    }
  // @Column({ type: 'varchar', length: 300 })
  // private _name: string;

  // @Column({ type: 'varchar', length: 12 })
  // private _cnpj: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _address: string;

  // @Column({ type: 'varchar', length: 50 })
  // private _neighborhood: string;

  // @Column({ type: 'varchar', length: 50 })
  // private _state: string;

  // @Column({ type: 'varchar', length: 10 })
  // private _number_address: string;

  // @Column({ type: 'varchar', length: 15 })
  // private _cep: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _user_id: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _telephone: string;

  // @Column({ type: 'number', default:0})
  // private _maximum_pets: number;

  // @Column({ type: 'varchar', length: 300,  default:""})
  // private _image: string;
  
  // @OneToMany(() => PetEntity, (pet) => pet.ong_id)
  // private _pets: PetEntity[];

  // constructor(props: OngProps) {
  //   super();
  //   this._name = props.name;
  //   this._cnpj = props.cnpj;
  //   this._address = props.address;
  //   this._neighborhood = props.neighborhood;
  //   this._state = props.state;
  //   this._number_address = props.number_address;
  //   this._cep = props.cep;
  //   this._user_id = props.user_id;
  //   this._telephone = props.telephone;
  //   this._maximum_pets = props.maximum_pets;
  //   this._image = props.image;
  //   this.validationOng();
  // }
  // addPets(pet: PetEntity): PetEntity[] {
  //   const arrayPets = [];
  //   arrayPets.push(pet);
  //   this._pets = arrayPets;
  //   return this._pets;
  // }

  // get name(): string {
  //   return this._name;
  // }
  // get cnpj(): string {
  //   return this._cnpj;
  // }
  // get address(): string {
  //   return this._address;
  // }
  // get neighborhood(): string {
  //   return this._neighborhood;
  // }
  // get state(): string {
  //   return this._state;
  // }
  // get number_address(): string {
  //   return this._number_address;
  // }
  // get cep(): string {
  //   return this._cep;
  // }
  // get user_id(): string {
  //   return this._user_id;
  // }
  // get telephone(): string {
  //   return this._telephone;
  // }
  // get maximum_pets(): number {
  //   return this._maximum_pets;
  // }
  // get image(): string {
  //   return this._image;
  // }
  // validationOng() {
  //   if (StringNotNullAndBlankSpace.test(this._user_id) === false) {
  //     throw new Error("User id is required.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._name) === false) {
  //     throw new Error("Name is required.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._address) === false) {
  //     throw new Error("Address is required.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._neighborhood) === false) {
  //     throw new Error("Neighborhood is required.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._state) === false) {
  //     throw new Error("State is required.");
  //   }
  //   if (NumberRegex.test(this._number_address) === false) {
  //     throw new Error("Required type number in number address.");
  //   }
  //   if (NumberRegex.test(this._maximum_pets.toString()) === false) {
  //     throw new Error("Required type number in maximum pets.");
  //   }
  //   if (ValidateCep.test(this._cep) === false) {
  //     throw new Error("Cep is not validate.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._telephone) === false) {
  //     throw new Error("Telephone is required.");
  //   }
  //   if (CnpjValidate.test(this._cnpj) === false) {
  //     throw new Error("Cnpj is not valid.");
  //   }
  // }
}
