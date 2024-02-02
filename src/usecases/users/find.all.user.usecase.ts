import { Injectable } from "@nestjs/common";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";

@Injectable()
export default class FindAllUsersUsecase{
    constructor(
        // @Inject("UserRepo")
        private usersRepository: UserRepository,
    
      ) {}
      async execute():Promise<User[] | {message:string}> {
        
        try{
          
          const users = await this.usersRepository.findAll();
          return users
          
        }catch(err){
          return { message:"user not found"};
        };
        
      }
}