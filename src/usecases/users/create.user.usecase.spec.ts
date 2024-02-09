import { UserRepository } from "../../infra/users/user.repository";
import CreateUseUsecase from "./create.user.usecase";
import { LoginRepository } from '../../infra/logins/login.repository';
import User from "../../infra/users/entities/user.entity";
import { CreateUserOutputDto } from "../../infra/users/dto/create-user.dto";
import { randomUUID } from "crypto";


describe('CreateUserUsecase', () => {
    let createUserUsecase: CreateUseUsecase;
    let userRepository: UserRepository;
    let loginRepository: LoginRepository;

    beforeEach(() => {
        const typeOrmMock: any = {};
        userRepository = new UserRepository(typeOrmMock);
        createUserUsecase = new CreateUseUsecase(userRepository, loginRepository);
    });
    it('should be defined', () => {
        expect(createUserUsecase).toBeDefined();
    });

    describe('createUser', () => {
        it('should create a new user', async () => {
            const userData = {
                name: 'testuser',
                email: 'test@example.com',
                password: 'password123',
            };


            const createdUser = await createUserUsecase.create(userData);

            expect(createdUser).toBeDefined();

        });
    });
    describe('createUser error name', () => {
        it('should create a new user', async () => {
            const userData = {
                name: '',
                email: 'test@example.com',
                password: 'password123',
            };


            const createdUser = await createUserUsecase.create(userData);

            expect(createdUser).toBeDefined();
            expect(createdUser).toEqual({ message: 'credentials invalid' });
        });
    });
    describe('createUser error email', () => {
        it('should create a new user', async () => {
            const userData = {
                name: 'francisco',
                email: '',
                password: 'password123',
            };


            const createdUser = await createUserUsecase.create(userData);

            expect(createdUser).toBeDefined();
            expect(createdUser).toEqual({ message: 'credentials invalid' });
        });
    });
    describe('createUser error password', () => {
        it('should create a new user', async () => {
            const userData = {
                name: 'francisco',
                email: 'test@email.com',
                password: '',
            };


            const createdUser = await createUserUsecase.create(userData);

            expect(createdUser).toBeDefined();
            expect(createdUser).toEqual({ message: 'credentials invalid' });
        });
    });
});
