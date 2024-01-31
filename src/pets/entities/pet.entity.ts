import { StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity from "../../base/base.entity";
import PetEntityInterface from "./pet.entity.interface";
import { Column, Entity } from "typeorm";

type PetProps = {
  name: string;
  species: string;
  age: number;
  gender: string;
  description?: string | "";
  ong_id: string;
  image?: string | "";
};
@Entity()
export class PetEntity extends BaseEntity {
  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 300 })
  species: string;

  @Column({ type: "integer", default: 0 })
  age: number;

  @Column({ type: "varchar", length: 300 })
  gender: string;

  @Column({ type: "varchar", length: 300, default: "" })
  description: string;

  @Column({ type: "varchar", length: 300 })
  ong_id: string;

  @Column({ type: "varchar", length: 300, default: "" })
  image: string;

  @Column({ type: "boolean", default: false })
  to_adopt: boolean;

  constructor(props: PetProps) {
    super();
    Object.assign(this, props);
    this.validationPet();
    this.isAdopted();
  }
  // @Column({ type: 'varchar', length: 300 })
  // private _name: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _species: string;

  // @Column({ type: 'integer', default:0 })
  // private _age: number;

  // @Column({ type: 'varchar', length: 300 })
  // private _gender: string;

  // @Column({ type: 'varchar', length: 300, default:"" })
  // private _description: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _ong_id: string;

  // @Column({ type: 'varchar', length: 300, default:"" })
  // private _image: string;

  // @Column({ type: 'boolean', default: false })
  // private _to_adopt: boolean;

  // constructor(props: PetProps) {
  //   super();
  //   this._name = props.name;
  //   this._species = props.species;
  //   this._age = props.age;
  //   this._gender = props.gender;
  //   this._description = props.description;
  //   this._ong_id = props.ong_id;
  //   this._image = props.image;
  //   this.validationPet();
  // }
  isAdopted(): boolean {
    this.update(new Date());
    this.to_adopt = !this.to_adopt;
    return this.to_adopt;
  }
  // get name(): string {
  //   return this._name;
  // }
  // get species(): string {
  //   return this._species;
  // }
  // get age(): number {
  //   return this._age;
  // }
  // get gender(): string {
  //   return this._gender;
  // }
  // get description(): string {
  //   return this._description;
  // }
  // get ong_id(): string {
  //   return this._ong_id;
  // }
  // get image(): string {
  //   return this._image;
  // }
  // get to_adopt(): boolean {
  //   return this._to_adopt;
  // }

  validationPet(): void {
    if (StringNotNullAndBlankSpace.test(this.ong_id) === false) {
      throw new Error("Ong id is required.");
    }
    if (StringNotNullAndBlankSpace.test(this.name) === false) {
      throw new Error("Name is required.");
    }
    if (StringNotNullAndBlankSpace.test(this.species) === false) {
      throw new Error("Species is required.");
    }
  }
}
