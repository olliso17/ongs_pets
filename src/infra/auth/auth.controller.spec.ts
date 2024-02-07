import { AuthController } from './auth.controller';
import { LoginRepository } from '../logins/login.repository';
import { UserRepository } from '../users/user.repository';
import { LoginUsecase } from '../../usecases/login/login.usecase';
import { LogoutUsecase } from '../../usecases/login/logout.usecase';

describe('AuthController', () => {
  let controller: AuthController;
  let loginRepository: LoginRepository;
  let userRepository: UserRepository;
  let loginUsecase: LoginUsecase;
  let logoutUsecase: LogoutUsecase

  beforeEach(() => {
    const typeOrmMock: any = {};
    loginRepository = new LoginRepository(typeOrmMock);
    userRepository = new UserRepository(typeOrmMock);
    loginUsecase = new LoginUsecase(userRepository, loginRepository)
    logoutUsecase = new LogoutUsecase(loginRepository);
    controller = new AuthController(loginUsecase, logoutUsecase)
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
