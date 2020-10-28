import {Token} from './token';
import {User} from './user';

export class UserData {
    token: Token;
    user: User;
    permissions: any;
    alterPassword:boolean;
  }

export class UserResponse {
    code: number;
    message: string;
    data: UserData;
  }