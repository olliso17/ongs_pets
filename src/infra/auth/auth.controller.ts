import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginUsecase } from 'src/usecases/login/login.usecase';
import { LoginInputDto } from '../logins/dto/login.dto';
import { Public } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private authService: LoginUsecase) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() input: LoginInputDto) {
    return this.authService.execute(input);
  }
}