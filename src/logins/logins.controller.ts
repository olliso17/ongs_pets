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

@Controller("logins")
export class LoginsController {
  constructor(private readonly loginUsecase: LoginUsecase) {}

  @Post()
  create(@Body() LoginInputDto: LoginInputDto) {
    return this.loginUsecase.execute(LoginInputDto);
  }

  // @Get()
  // findAll() {
  //   return this.loginUsecase.findAll();
  // }

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
