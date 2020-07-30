import { Component } from '@angular/core';
import { timer } from 'rxjs';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {     
      //this.statusBar.styleDefault();    
      this.statusBar.backgroundColorByHexString('#5098f5');
      //this.statusBar.hide();
      //this.statusBar.overlaysWebView(true); para superponer al webview
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false);
    });
  }
  logout(){
    this.auth.logout();
  }
}
