import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ForbiddenException,
  Req,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import CreateUseUsecase from "../../usecases/users/create.user.usecase";
import FindUserByIdUsecase from "../../usecases/users/find.by.user.id";
import FindAllUsersUsecase from "../../usecases/users/find.all.user.usecase";
import ActivateUseUsecase from "../../usecases/users/activate.user.usecase";
import EditPasswordUserUsecase from "../../usecases/users/edit.user.usecase";
import { LoginUsecase } from "../../usecases/login/login.usecase";
import { AuthGuard, Public } from "../auth/auth.guard";
import { CreateUserInputDto } from "./dto/create-user.dto";
import { FindByIdUserInputDto } from "./dto/active-user.dto";
import { EditPasswordUserInputDto } from "./dto/edit-user.dto";

@ApiTags('users')
@Controller()
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    private readonly createUser: CreateUseUsecase,
    private readonly findUser: FindUserByIdUsecase,
    private readonly findAllUser: FindAllUsersUsecase,
    private readonly activateUser: ActivateUseUsecase,
    private readonly editPasswordUser: EditPasswordUserUsecase,
    private readonly loginUser: LoginUsecase,
  ) {}

  @Public()
  @Post("user/create")
  create(@Body() createUserDto: CreateUserInputDto) {
    return this.createUser.create(createUserDto);
  }

  @Get("users")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  findAll() {
    return this.findAllUser.execute();
  }

  @Get("user/:id")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  findOne(@Param("id") id: string) {
    return this.findUser.execute(id);
  }

  @Patch("user/activate/:id")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  activate(@Param("id") id: string, @Body() updateUserDto: FindByIdUserInputDto) {
    return this.activateUser.update(id,updateUserDto);
  }
  @Public()
  @Patch("user/edit_password")
  editUserPassword(@Body() editUserPassword: EditPasswordUserInputDto) {
    return this.editPasswordUser.execute(editUserPassword);
  }
  
}
