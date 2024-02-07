import { LoginRepository } from "../../infra/logins/login.repository";
import { UserRepository } from '../../infra/users/user.repository';
import { LogoutDto } from '../../infra/logins/dto/logout.dto';

export class LogoutUsecase {
    constructor(
        private readonly loginRepository: LoginRepository
    ) { }
    async execute(res: Response, logoutDto:LogoutDto) {

        const login = await this.loginRepository.findTokenLogin(logoutDto.token)
        login.active = false
        login.updated_at = new Date()

        await this.loginRepository.update(login)
        localStorage.removeItem('JWT-auth');

        return { message: 'Logout successful' };
    }
}