export default interface DonationEntityInterface {
  get ong_id(): string;
  get description(): string;
  validationDonation();
}
