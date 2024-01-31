import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from 'src/ongs/entities/ong.entity';
import { DonationEntity } from './entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DonationEntity])],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
