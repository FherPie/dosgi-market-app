import { Component } from '@angular/core';
import {NavController, IonRefresher} from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts:any;
  myString:any;


  constructor(public navCtrl: NavController, public http: Http, private  authService:  AuthService, private  router:  Router ) {
    // this.myString = "Pipes are super cool";

//     this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').pipe(
//     map(res => res.json())).subscribe(data => {
//       this.posts = data.data.children;
//   },err => {
//     console.log("Oops!");
// } );
  }

  irA(item){
    console.log(item);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          item: JSON.stringify(item),
          refresh: IonRefresher
      }
  };
  this.navCtrl.navigateForward([item],  navigationExtras);

  }



  cerrarSesion(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
