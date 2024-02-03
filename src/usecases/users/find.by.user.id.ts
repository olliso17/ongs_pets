import { Injectable } from "@nestjs/common";
import User from "src/infra/users/entities/user.entity";
import { UserRepository } from "src/infra/users/user.repository";

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