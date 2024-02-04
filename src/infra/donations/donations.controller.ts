import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import CreateDonationUsecase from 'src/usecases/donations/create.donation.usecase';
import { CreateDonationInputDto } from './dto/create-donation.dto';

@Controller()
export class DonationsController {
  constructor(private readonly createDonation: CreateDonationUsecase) {}

  @Post("donation/create")
  create(@Body() createDonationDto: CreateDonationInputDto) {
    return this.createDonation.create(createDonationDto);
  }

  // @Get()
  // findAll() {
  //   return this.createDonation.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.createDonation.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDonationDto: UpdateDonationDto) {
  //   return this.createDonation.update(+id, updateDonationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.createDonation.remove(+id);
  // }
}
