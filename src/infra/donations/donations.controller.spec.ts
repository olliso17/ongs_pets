import { DonationsController } from './donations.controller';
import CreateDonationUsecase from '../../usecases/donations/create.donation.usecase';
import { DonationRepository } from './donation.repository';
import FindAllActiveDonationsUsecase from '../../usecases/donations/find.all.active.donation.usecase';
import FindDonationByIdUsecase from '../../usecases/donations/find.by.donation.id';
import ActivateDonationUsecase from '../../usecases/donations/activate.pet.usecases';
import { EditDonationUsecase } from '../../usecases/donations/edit.donation.usecase';

describe('DonationsController', () => {
  let controller: DonationsController;
  let donationRepository: DonationRepository;
  let createDonationUsecase: CreateDonationUsecase;
  let findAllActiveDonationsUsecase: FindAllActiveDonationsUsecase;
  let findDonationByIdUsecase: FindDonationByIdUsecase;
  let activateDonationUsecase: ActivateDonationUsecase;
  let editDonationUsecase: EditDonationUsecase;

  beforeEach(() => {
    const typeOrmMock: any = {};
    donationRepository = new DonationRepository(typeOrmMock);
    createDonationUsecase = new CreateDonationUsecase(donationRepository);
    findDonationByIdUsecase = new FindDonationByIdUsecase(donationRepository);
    findAllActiveDonationsUsecase = new FindAllActiveDonationsUsecase(donationRepository);
    controller = new DonationsController(createDonationUsecase, activateDonationUsecase, editDonationUsecase, findAllActiveDonationsUsecase, findDonationByIdUsecase, )
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
