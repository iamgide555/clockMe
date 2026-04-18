import { LoginUser } from '../interface/login-user';

export class LoginUserModel implements LoginUser {
  username = '';
  password = '';

  constructor(loginUser?: LoginUser) {
    if (loginUser) {
      this.username = loginUser.username;
      this.password = loginUser.password;
    }
  }
}
