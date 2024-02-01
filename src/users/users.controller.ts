import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreateUserInputDto } from "./dto/create-user.dto";
import CreateUseUsecase from "src/usecases/users/create.user.usecase";
import FindUserByIdUsecase from "src/usecases/users/find.by.user.id";
import ActivateUseUsecase from "src/usecases/users/activate.user.usecase";
import { FindByIdUserInputDto } from "./dto/active-user.dto";
import FindAllUsersUsecase from "src/usecases/users/find.all.user.usecase";
import EditPasswordUserUsecase from "src/usecases/users/edit.user.usecase";
import { EditPasswordUserInputDto } from "./dto/edit-user.dto";
@Controller("users")
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    private readonly createUser: CreateUseUsecase,
    private readonly findUser: FindUserByIdUsecase,
    private readonly findAllUser: FindAllUsersUsecase,
    private readonly activateUser: ActivateUseUsecase,
    private readonly editPasswordUser: EditPasswordUserUsecase,
  ) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserInputDto) {
    return this.createUser.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.findAllUser.execute();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.findUser.execute(id);
  }

  @Patch("activate")
  activate(@Body() updateUserDto: FindByIdUserInputDto) {
    return this.activateUser.update(updateUserDto);
  }
  @Patch("edit_password")
  editUserPassword(@Body() editUserPassword: EditPasswordUserInputDto) {
    return this.editPasswordUser.execute(editUserPassword);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
