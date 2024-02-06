import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { DonationRepository } from './donation.repository';
import CreateDonationUsecase from 'src/usecases/donations/create.donation.usecase';
import { AuthGuard } from '../auth/auth.guard';
import ActivateDonationUsecase from 'src/usecases/donations/activate.pet.usecases';
import { EditDonationUsecase } from 'src/usecases/donations/edit.donation.usecase';
import FindAllActiveDonationsUsecase from 'src/usecases/donations/find.all.active.donation.usecase';
import FindDonationByIdUsecase from 'src/usecases/donations/find.by.donation.id';
import { RedisDonationsRepository } from '../cache/redis-donations-repository';
import { RedisService } from 'src/redis';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonationsController],
  providers: [FindDonationByIdUsecase, FindAllActiveDonationsUsecase, EditDonationUsecase, CreateDonationUsecase, DonationRepository, ActivateDonationUsecase, AuthGuard, RedisDonationsRepository, RedisService],
})
export class DonationsModule { }
