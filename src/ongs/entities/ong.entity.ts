import { Base } from "src/bases/entities/base.entity";
import { Donation } from "src/donations/entities/donation.entity";
import { Pet } from "src/pets/entities/pet.entity";
import User from "src/users/entities/user.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";

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
  pets?: Pet[] | [];
};

@Entity()
@Index('idx_user_id', ['user'])
export class Ong extends Base {
  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 12, unique: true })
  cnpj: string;

  @Column({ type: "varchar", length: 300 })
  address: string;

  @Column({ type: "varchar", length: 50 })
  neighborhood: string;

  @Column({ type: "varchar", length: 50 })
  state: string;

  @Column({ type: "varchar", length: 10 })
  number_address: string;

  @Column({ type: "varchar", length: 15 })
  cep: string;

  @ManyToOne(() => User, (user) => user.ongs)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: "varchar", length: 300 })
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
    // this.validationOng();
  }
}
