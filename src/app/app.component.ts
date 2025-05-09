import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  public load: boolean;
  
  constructor(
    private platform: Platform,
     private translate: TranslateService
  ) {

    this.translate.setDefaultLang('es');
    this.load = false;
    this.initApp();

  }

  initApp(){
    this.platform.ready().then( async () => {
      const language = await Device.getLanguageCode();
      //console.log(language.value);
      
      if (language.value) {
        this.translate.use(language.value.slice(0, 2));
      } else {
        
      }
      this.load = true;
    })
  }
}
