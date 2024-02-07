import { Test, TestingModule } from '@nestjs/testing';
import { DonationsController } from './donations.controller';
import CreateDonationUsecase from '../../usecases/donations/create.donation.usecase';

describe('DonationsController', () => {
  let controller: DonationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonationsController],
      providers: [CreateDonationUsecase],
    }).compile();

    controller = module.get<DonationsController>(DonationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
