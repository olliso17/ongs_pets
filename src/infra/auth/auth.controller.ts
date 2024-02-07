import { Body, Controller, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { LoginInputDto } from '../logins/dto/login.dto';
import { Public } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from '../../usecases/login/login.usecase';
import { LogoutUsecase } from '../../usecases/login/logout.usecase';
import { LogoutDto } from '../logins/dto/logout.dto';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly login: LoginUsecase,
    private readonly logoutUsecase: LogoutUsecase

  ) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() input: LoginInputDto) {
    return this.login.execute(input);
  }

  @Public()
  @Post('logout')
  async logout(@Res() res: Response, token:LogoutDto) {
    const logoutMessage = await this.logoutUsecase.execute(res, token);
    return logoutMessage;
  }
}