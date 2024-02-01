import { Base } from "src/bases/entities/base.entity";
import { Ong } from "src/ongs/entities/ong.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

type DonationProps = {
  ong_id: string;
  description?: string;
};

@Entity()
@Index('idx_ong_id_in_donation', ['ong'])
export class Donation extends Base {
  @ManyToOne(() => Ong, (ong) => ong.donations)
  @JoinColumn({ name: 'ong_id' })
  ong: Ong;

  @Column({ type: "varchar", length: 300 })
  description: string;

  constructor(props: DonationProps) {
    super();
    Object.assign(this, props);
    // this.validationDonation();
  }
}
