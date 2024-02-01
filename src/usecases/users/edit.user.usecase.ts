import { Injectable } from "@nestjs/common";
import { EditPasswordUserInputDto } from "src/users/dto/edit-user.dto";
import User from "src/users/entities/user.entity";
import { UserRepository } from "src/users/user.repository";

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
@Injectable()
export default class EditPasswordUserUsecase{
    constructor(
        // @Inject("UserRepo")
        private usersRepository: UserRepository,
    
      ) {}
      async execute(input:EditPasswordUserInputDto):Promise<{message:string}> {
        const salt = process.env.SALT;
        let isUser:User;
        input.email = bcrypt.hashSync(input.email, salt);
        input.password = bcrypt.hashSync(input.password, salt);
        const users = await this.usersRepository.findAll();
        users.map(async user =>{
          if(user.email === input.email && user.password === input.password){
            isUser = user;
          }
        })
        try{
          isUser.password = bcrypt.hashSync(input.new_password, salt);
          isUser.updated_at = new Date()
          await this.usersRepository.update(isUser)
          return{message: "updated successfully"}
          
        }catch(err){
          return { message:"credentials invalid"};
        };
        
      }
}