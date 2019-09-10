import { CreditosService } from './../servicios/creditos.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { ReportesPage } from '../pages/reportes/reportes';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CreditoPage } from '../pages/credito/credito';

export const firebaseConfig = {
  apiKey: "AIzaSyD07JPtaa-6st5usI1UbhPGRSFW1WwgSmA",
  authDomain: "sharoapp-10b6b.firebaseapp.com",
  databaseURL: "https://sharoapp-10b6b.firebaseio.com",
  projectId: "sharoapp-10b6b",
  storageBucket: "",
  messagingSenderId: "180004965744",
  appId: "1:180004965744:web:c8c61ba1e92bd0bd"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    ReportesPage,
    TabsPage,
    CreditoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    ReportesPage,
    TabsPage,
    CreditoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CreditosService
  ]
})
export class AppModule {}
