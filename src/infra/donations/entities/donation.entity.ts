
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../../bases/entities/base.entity";
import Ong from "../../ongs/entities/ong.entity";

type DonationProps = {
  ong_id: string;
  description?: string;
};

@Entity()
@Index("idx_ong_id_in_donation", ["ong"])
export class Donation extends Base{
  @Column({ type: "varchar" })
  ong_id: string;

  @ManyToOne(() => Ong, ong => ong.donations)
  @JoinColumn({ name: "ong_id" })
  ong: Ong;

  @Column({ type: "varchar", length: 300 })
  description: string;

  constructor(props: DonationProps) {
    super();
    Object.assign(this, props);
    // this.validationDonation();
  }
}
