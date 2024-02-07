import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginInputDto } from '../logins/dto/login.dto';
import { Public } from './auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from '../../usecases/login/login.usecase';

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