import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import CreateDonationUsecase from '../../usecases/donations/create.donation.usecase';
import ActivateDonationUsecase from '../../usecases/donations/activate.pet.usecases';
import { EditDonationUsecase } from '../../usecases/donations/edit.donation.usecase';
import FindAllActiveDonationsUsecase from '../../usecases/donations/find.all.active.donation.usecase';
import FindDonationByIdUsecase from '../../usecases/donations/find.by.donation.id';
import { AuthGuard, Public } from '../auth/auth.guard';
import { CreateDonationInputDto } from './dto/create-donation.dto';
import { FindByIdDonationInputDto } from './dto/active.donation.by.id';
import { UpdateDonationInputDto } from './dto/update-donation.dto';


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
