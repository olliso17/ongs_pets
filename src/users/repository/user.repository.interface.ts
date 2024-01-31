import { UpdateUserDto } from "../dto/update-user.dto";
import User from "../entities/user.entity";

export default interface UserRepositoryInterface{
    create(user:User): Promise<User>;
    findAll();
    update(updateUserDto: UpdateUserDto): Promise<User>;
    isActiveUserId(user_id:string, status):Promise<User>;
}