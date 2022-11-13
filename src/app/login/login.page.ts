import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AppComponent } from '../app.component';

export interface Post {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  public errorMessage: string;
  event: any;
  login: Post = {
    user: '',
    password: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private loadingController: LoadingController,
    private router: Router,
    private appComponent: AppComponent,
  ) {
  }

  ngOnInit() {
   }

  ionViewWillEnter() {
    this.menuController.enable(false);
    if (localStorage.getItem('logged') !== null) {
      // this.event.publish('userLogged', JSON.parse(localStorage.getItem('logged')));
      this.router.navigate(['/home']);
      this.menuController.enable(true);
    }
  }

  validate() {
    this.errorMessage = undefined;
    const data = {
      username: this.login.user,
      password: this.login.password,
    };
    this.authenticate(data, true);
  }

  async authenticate(data, firstLogin) {
    const loading = await this.loadingController.create({
      message: 'Loading..',
      spinner: 'dots',
      cssClass: 'mensajeCarga'
    });
    await loading.present().then(() => {
      if (data.username === 'admin') {
        if (data.password === 'admin') {
          this.menuController.enable(true);
          this.router.navigate(['/home']);
          loading.dismiss();
        }
        loading.dismiss();
      } else {
        this.errorMessage = 'Invalid user or password ';
        loading.dismiss();
      }
      // this.restApiService.authenticate(data).then((response: any) => {
      //   const valid = response.datos.valid;
      //   if (valid === true) {
      //     if (firstLogin) {
      //       const dataLogin = {
      //         id: response.datos.idUser,
      //         username: this.loginFormGroup.get('user').value,
      //         roles: response.datos.rols,
      //         doctor: response.datos.doctor,
      //         sucursales: response.datos.sucursales,
      //         sucursal: response.datos.sucursal_default
      //       };
      //       // this.event.publish('userLogged', dataLogin);
      //     } else {
      //     }
      //     loading.dismiss();
      //     this.router.navigate(['/home']);
      //   } else {
      //     this.errorMessage = 'Usuario o contraseña invalidos';
      //   }
      // }).catch((error)=>{
      //   console.log('error de validacion',error);
      //   loading.dismiss();
      // });
    });
  }

}
