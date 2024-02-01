import { Injectable } from "@nestjs/common";
import { CreateUserInputDto, CreateUserOutputDto } from "src/users/dto/create-user.dto";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";

@Injectable()
export default class FindUserByIdUseUsecase{
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