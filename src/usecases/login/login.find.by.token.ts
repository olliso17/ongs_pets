import { Injectable } from "@nestjs/common";
import { LoginRepository } from "src/infra/logins/login.repository";
import { UserRepository } from "src/infra/users/user.repository";

@Injectable()
export default class FindLoginByIdUsecase{
    constructor(
        private loginRepository: LoginRepository,
    
      ) {}
      async execute(id: string):Promise<{token:string}> {
        
        try{
          
          const token = await this.loginRepository.findLogin(id);
          
          return {token: token};

        }catch(err){
          return err;
        };
        
      }
}