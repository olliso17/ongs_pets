import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { DonationRepository } from './donation.repository';
import { AuthGuard } from '../auth/auth.guard';
import FindDonationByIdUsecase from '../../usecases/donations/find.by.donation.id';
import FindAllActiveDonationsUsecase from '../../usecases/donations/find.all.active.donation.usecase';
import { EditDonationUsecase } from '../../usecases/donations/edit.donation.usecase';
import CreateDonationUsecase from '../../usecases/donations/create.donation.usecase';
import ActivateDonationUsecase from '../../usecases/donations/activate.pet.usecases';
import { RedisDonationsRepository } from '../cache/redis-donations-repository';
import { RedisService } from '../../redis';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonationsController],
  providers: [FindDonationByIdUsecase, FindAllActiveDonationsUsecase, EditDonationUsecase, CreateDonationUsecase, DonationRepository, ActivateDonationUsecase, AuthGuard, RedisDonationsRepository, RedisService],
})
export class DonationsModule { }
