import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'User Profile',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'Table List',
      url: '/table',
      icon: 'clipboard'
    },
    {
      title: 'Typography',
      url: '/typography',
      icon: 'reader'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    }
  ];
  menuItems: any[];

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private navController: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log('Se presiono back');
        }, false);
      });
      // setTimeout(() => {
      // this.networkService.checkConnectionBehaviour();
      // }, 2000);
      // this.splashScreen.hide();
    });
  }
  salir() {
    localStorage.removeItem('logged');
    this.navController.navigateRoot(['/login']);
  }

}
