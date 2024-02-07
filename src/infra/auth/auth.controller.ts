import { Body, Controller, Post, HttpCode, HttpStatus, Res, Patch } from '@nestjs/common';
import { LoginInputDto } from '../logins/dto/login.dto';
import { Public } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from '../../usecases/login/login.usecase';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly login: LoginUsecase,

  ) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() input: LoginInputDto) {
    return this.login.execute(input);
  }

}