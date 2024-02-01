import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserInputDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import CreateUseUsecase from "src/usecases/create.user.usecase";
import FindUserByIdUseUsecase from "src/usecases/find.by.user.id";
import FindUserByEmailUseUsecase from "src/usecases/find.by.user.email";

@Controller("users")
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    private readonly createUser: CreateUseUsecase,
    private readonly findUser: FindUserByIdUseUsecase,
    private readonly findUserEmail: FindUserByEmailUseUsecase
  ) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserInputDto) {
    return this.createUser.create(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.findUser.execute(id);
  }
  @Get(":email")
  findEmail(@Param("email") email: string) {
    return this.findUser.execute(email);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
