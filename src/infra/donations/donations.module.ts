import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { DonationRepository } from './donation.repository';
import CreateDonationUsecase from 'src/usecases/donations/create.donation.usecase';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonationsController],
  providers: [CreateDonationUsecase, DonationRepository, AuthGuard],
})
export class DonationsModule {}
