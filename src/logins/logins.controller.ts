import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LoginInputDto } from "./dto/login.dto";
import { UpdateLoginDto } from "./dto/update-login.dto";
import { LoginUsecase } from "src/usecases/login/login.usecase";
import FindAllUsersUsecase from "src/usecases/users/find.all.user.usecase";

@Controller()
export class LoginsController {
  constructor(
    private readonly loginUsecase: LoginUsecase,
    private readonly findAllUser: FindAllUsersUsecase,
  ) {}

  @Post("login")
  create(@Body() LoginInputDto: LoginInputDto) {
    return this.loginUsecase.execute(LoginInputDto);
  }

  @Get("users")
  findAll() {
    return this.findAllUser.execute();
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.loginUsecase.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateLoginDto: UpdateLoginDto) {
  //   return this.loginUsecase.update(+id, updateLoginDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.loginUsecase.remove(+id);
  // }
}
