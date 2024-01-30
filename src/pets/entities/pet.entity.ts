import { StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity, { BaseEntityProps } from "../../base/base.entity";
import PetEntityInterface from "./pet.entity.interface";

type PetProps = BaseEntityProps & {
  name: string;
  species: string;
  age: number;
  gender: string;
  description: string;
  ong_id: string;
  image?: string | "";
};

export class PetEntity extends BaseEntity implements PetEntityInterface {
  private _name: string;
  private _species: string;
  private _age: number;
  private _gender: string;
  private _description: string;
  private _ong_id: string;
  private _image: string;
  private _to_adopt: boolean;

  constructor(props: PetProps) {
    super(props);
    this._name = props.name;
    this._species = props.species;
    this._age = props.age;
    this._gender = props.gender;
    this._description = props.description;
    this._ong_id = props.ong_id;
    this._image = props.image;
    this._to_adopt = false;
    this.validationPet();
  }
  isAdopted(adopt: boolean): boolean {
    if (adopt === this._to_adopt) {
      throw new Error("value already exists of the adoption status.");
    }
    if (adopt !== this._to_adopt) {
      this.update(new Date());
      this._to_adopt = adopt;
      return this._to_adopt;
    }
  }
  get name(): string {
    return this._name;
  }
  get species(): string {
    return this._species;
  }
  get age(): number {
    return this._age;
  }
  get gender(): string {
    return this._gender;
  }
  get description(): string {
    return this._description;
  }
  get ong_id(): string {
    return this._ong_id;
  }
  get image(): string {
    return this._image;
  }
  get to_adopt(): boolean {
    return this._to_adopt;
  }

  validationPet(): void {
    if (StringNotNullAndBlankSpace.test(this._ong_id) === false) {
      throw new Error("Ong id is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._name) === false) {
      throw new Error("Name is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._species) === false) {
      throw new Error("Species is required.");
    }
  }
}
