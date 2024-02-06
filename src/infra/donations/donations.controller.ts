import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import CreateDonationUsecase from 'src/usecases/donations/create.donation.usecase';
import { CreateDonationInputDto } from './dto/create-donation.dto';
import { AuthGuard, Public } from '../auth/auth.guard';
import ActivateDonationUsecase from 'src/usecases/donations/activate.pet.usecases';
import { FindByIdDonationInputDto } from './dto/active.donation.by.id';
import { EditDonationUsecase } from 'src/usecases/donations/edit.donation.usecase';
import { UpdateDonationInputDto } from './dto/update-donation.dto';
import FindAllActiveDonationsUsecase from 'src/usecases/donations/find.all.active.donation.usecase';
import FindDonationByIdUsecase from 'src/usecases/donations/find.by.donation.id';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('donations')
@Controller()
export class DonationsController {
  constructor(
    private readonly createDonation: CreateDonationUsecase,
    private readonly activateDonation: ActivateDonationUsecase,
    private readonly updateDonation: EditDonationUsecase,
    private readonly findAllActive: FindAllActiveDonationsUsecase,
    private readonly findDonationById: FindDonationByIdUsecase
  ) { }

  @Post("donation/create")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  create(@Body() createDonationDto: CreateDonationInputDto) {
    return this.createDonation.create(createDonationDto);
  }
  @Patch("donation/activate/:id")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  activate(@Param("id") id: string, @Body() updateOngDto: FindByIdDonationInputDto) {
    return this.activateDonation.execute(id, updateOngDto);
  }
  @Public()
  @Get("donations/active")
  findAll() {
    return this.findAllActive.execute();
  }

  @Public()
  @Get('donation/:id')
  findOne(@Param('id') id: string) {
    return this.findDonationById.execute(id);
  }

  @Patch('donation/update/:id')
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  update(@Param('id') id: string, @Body() updatePetDto: UpdateDonationInputDto) {
    return this.updateDonation.execute(id, updatePetDto);
  }

}
