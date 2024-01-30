import { StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity, { BaseEntityProps } from "../../base/base.entity";
import DonationEntityInterface from "./donation.entity.interface";

type DonationProps = BaseEntityProps & {
  ong_id: string;
  description?: string;
};

export class Donation extends BaseEntity implements DonationEntityInterface {
  private _ong_id: string;
  private _description: string;

  constructor(props: DonationProps) {
    super(props);
    this._ong_id = props.ong_id;
    this._description = props.description;
  }
  get ong_id(): string {
    return this._ong_id;
  }
  get description(): string {
    return this._description;
  }
  validationDonation() {
    if (StringNotNullAndBlankSpace.test(this._ong_id) === false) {
      throw new Error("Ong id is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._description) === false) {
      throw new Error("Description is required.");
    }
  }
}
