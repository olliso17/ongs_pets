import { StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity from "../../base/base.entity";
import DonationEntityInterface from "./donation.entity.interface";
import { Column, Entity } from "typeorm";

type DonationProps =  {
  ong_id: string;
  description?: string;
};
@Entity()
export class DonationEntity
  extends BaseEntity
{
  @Column({ type: 'varchar', length: 300 })
    ong_id: string;

  @Column({ type: 'varchar', length: 300 })
    description: string;

  constructor(props: DonationProps) {
    super();
    Object.assign(this, props);
  }
  // @Column({ type: 'varchar', length: 300 })
  // private _ong_id: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _description: string;

  // constructor(props: DonationProps) {
  //   super();
  //   this._ong_id = props.ong_id;
  //   this._description = props.description;
  //   this.validationDonation();
  // }
  // get ong_id(): string {
  //   return this._ong_id;
  // }
  // get description(): string {
  //   return this._description;
  // }
  // validationDonation() {
  //   if (StringNotNullAndBlankSpace.test(this._ong_id) === false) {
  //     throw new Error("Ong id is required.");
  //   }
  //   if (StringNotNullAndBlankSpace.test(this._description) === false) {
  //     throw new Error("Description is required.");
  //   }
  // }
}
