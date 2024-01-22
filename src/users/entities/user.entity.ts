import { Login } from 'src/logins/entities/login.entity';
import { Ong } from 'src/ongs/entities/ong.entity';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  ongs?: Ong[];
  active: boolean;
  image?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  logins?: Login[];
}