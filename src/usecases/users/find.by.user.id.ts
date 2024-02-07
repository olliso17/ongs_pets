import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infra/users/user.repository";
import User from "../../infra/users/entities/user.entity";

@Injectable()
export default class FindUserByIdUsecase{
    constructor(
        // @Inject("UserRepo")
        private usersRepository: UserRepository,
    
      ) {}
      async execute(id: string):Promise<User | {message:string}> {
        
        try{
          
          const user = await this.usersRepository.find(id);
          
          return user;

        }catch(err){
          return { message:"user not found"};
        };
        
      }
}