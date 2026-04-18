import { Injectable, signal } from '@angular/core';
import { LoginUserModel } from '../../model/login-user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = signal<boolean>(false);

  login(userData: LoginUserModel): Promise<any> {
    if (!userData?.username || !userData?.password) {
      this.isLoggedIn.set(false);
    } else this.isLoggedIn.set(true);
    return Promise.resolve(this.isLoggedIn());
  }
}
