import { Base } from "src/infra/bases/entities/base.entity";
import { Donation } from "src/infra/donations/entities/donation.entity";
import { Pet } from "src/infra/pets/entities/pet.entity";
import User from "src/infra/users/entities/user.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

type OngProps = {
  name?: string;
  cnpj: string;
  address?: string;
  neighborhood?: string;
  state?: string;
  number_address?: string;
  cep?: string;
  user_id: string;
  city?:string;
  telephone?: string;
  maximum_pets?: number | 0;
  email_ong?: string;
  image?: string | "";
  pets?: Pet[] | [];
};

@Entity()
@Index("idx_user_id", ["user"])
export default class Ong extends Base {
  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 80, unique: true })
  cnpj: string;

  @Column({ type: "varchar", length: 300 })
  address: string;

  @Column({ type: "varchar", length: 80 })
  neighborhood: string;

  @Column({ type: "varchar", length: 80 })
  city: string;

  @Column({ type: "varchar", length: 80 })
  email_ong: string;

  @Column({ type: "varchar", length: 80 })
  state: string;

  @Column({ type: "varchar", length: 80 })
  number_address: string;

  @Column({ type: "varchar", length: 80 })
  cep: string;

  @Column({ type: "varchar" }) 
  user_id: string;

  @ManyToOne(() => User, user => user.ongs)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ type: "varchar", length: 300,  default: "" })
  telephone: string;

  @Column({ type: "integer", default: 0 })
  maximum_pets: number;

  @Column({ type: "varchar", length: 300, default: "" })
  image: string;

  @OneToMany(() => Pet, pet => pet.ong)
  pets: Pet[];

  @OneToMany(() => Donation, donation => donation.ong)
  donations: Donation[];

  constructor(props: OngProps) {
    super();

    Object.assign(this, props);
  }
}
