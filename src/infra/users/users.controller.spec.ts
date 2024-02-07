import { UsersController } from './users.controller';
import CreateUseUsecase from '../../usecases/users/create.user.usecase';
import { UserRepository } from './user.repository';
import { LoginRepository } from '../logins/login.repository';
import FindAllUsersUsecase from '../../usecases/users/find.all.user.usecase';
import ActivateUseUsecase from '../../usecases/users/activate.user.usecase';
import EditPasswordUserUsecase from '../../usecases/users/edit.user.usecase';
import FindUserByIdUsecase from '../../usecases/users/find.by.user.id';
import { LoginUsecase } from '../../usecases/login/login.usecase';

describe('UsersController', () => {
  let controller: UsersController;
  let userRepository: UserRepository;
  let createUserUsecase: CreateUseUsecase;
  let loginRepository: LoginRepository;
  let findAllUsersUsecase: FindAllUsersUsecase;
  let activateUseUsecase: ActivateUseUsecase;
  let editPasswordUserUsecase: EditPasswordUserUsecase;
  let findUserByIdUsecase: FindUserByIdUsecase;
  let loginUsecase: LoginUsecase;

  beforeEach(() => {
    const typeOrmMock: any = {};
    userRepository = new UserRepository(typeOrmMock);
    loginRepository = new LoginRepository(typeOrmMock);
    createUserUsecase = new CreateUseUsecase(userRepository, loginRepository);
    findAllUsersUsecase = new FindAllUsersUsecase(userRepository);
    activateUseUsecase = new ActivateUseUsecase(userRepository);
    editPasswordUserUsecase = new EditPasswordUserUsecase(userRepository);
    findUserByIdUsecase = new FindUserByIdUsecase(userRepository);
    loginUsecase = new LoginUsecase(userRepository, loginRepository)
    controller = new UsersController(createUserUsecase, findUserByIdUsecase, findAllUsersUsecase, activateUseUsecase, editPasswordUserUsecase, loginUsecase)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
