import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from '../../usecases/login/login.usecase';
import { LoginInputDto } from '../logins/dto/login.dto';
import { Public } from './auth.guard';

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