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
import CreateUseUsecase from "src/usecases/users/create.user.usecase";
import FindUserByIdUseUsecase from "src/usecases/users/find.by.user.id";
import FindUserByEmailUseUsecase from "src/usecases/users/find.by.user.email";
import ActivateUseUsecase from "src/usecases/users/activate.user.usecase";
import { FindByIdUserInputDto } from "./dto/update-user.dto";
@Controller("users")
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    private readonly createUser: CreateUseUsecase,
    private readonly findUser: FindUserByIdUseUsecase,
    private readonly findUserEmail: FindUserByEmailUseUsecase,
    private readonly activateUser: ActivateUseUsecase,
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
    return this.findUserEmail.execute(email);
  }

  @Patch("activate")
  activate(
    @Body() updateUserDto: FindByIdUserInputDto,
  ) {
    return this.activateUser.update(updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
