
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../../bases/entities/base.entity";
import Ong from "../../ongs/entities/ong.entity";

type PetProps = {
  name: string;
  species: string;
  age?: number;
  gender: string;
  description?: string | "";
  ong_id: string;
  image?: string | "";
};
@Entity()
@Index("idx_ong_id", ["ong"])
export class Pet extends Base {
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

  @Column({ type: "varchar" })
  ong_id: string;

  @ManyToOne(() => Ong, ong => ong.pets)
  @JoinColumn({ name: "ong_id" })
  ong: Ong;

  @Column({ type: "varchar", default: "" })
  image: string;

  @Column({ type: "boolean", default: false })
  to_adopt: boolean;

  constructor(props: PetProps) {
    super();
    Object.assign(this, props);
    // this.validationPet();
    // this.isAdopted();
  }
}
