import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { LoginUserModel } from '../../model/login-user.model';
import { LoginService } from '../../commons/services/login.service';
import { ToastService } from '../../commons/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonButton,
  ],
})
export class LoginPage implements OnInit {
  loginData: LoginUserModel = new LoginUserModel();
  private readonly loginService = inject(LoginService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);
  constructor() {}

  ngOnInit() {}

  forgetPassword() {
    console.log('Forget password clicked');
  }

  login() {
    this.loginService.login(this.loginData).then(() => {
      if (this.loginService.isLoggedIn()) {
        this.toastService.toastMessage('Login Success', 'success');
        this.router.navigate(['/home/scan']);
      } else {
        this.toastService.toastMessage(
          'Please enter correct username/ password',
          'danger',
        );
      }
    });
  }
}
