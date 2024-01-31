import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserInputDto } from './dto/create-user.dto';
import CreateUserUsecase from './usecases/create.user.usecase';

@Controller('users')
export class UsersController {
  // constructor(private readonly createUseCase: CreateUserUsecase) {}
  constructor(private readonly createUseCase: CreateUserUsecase) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserInputDto) {
   
    return await this.createUseCase.execute(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
