import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe(res=>{
     
      this.router.navigateByUrl('home');
    },
    err=>{
      this.presentToast(err.error);
    } );
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
