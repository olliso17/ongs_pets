import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInputDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserInputDto) {}
