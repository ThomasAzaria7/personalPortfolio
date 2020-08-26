import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './C-footer/footer/footer.component';
import { BackgroundComponent } from './background/background.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProjectsComponent } from './projects/projects.component';
import * as firebase from 'firebase'

var firebaseConfig = {
   apiKey: "AIzaSyDEclLJh8YchwDwkxvZHbaSpKWzU9ovpX8",
   authDomain: "thomasazaria07.firebaseapp.com",
   databaseURL: "https://thomasazaria07.firebaseio.com",
   projectId: "thomasazaria07",
   storageBucket: "thomasazaria07.appspot.com",
   messagingSenderId: "589200615321",
   appId: "1:589200615321:web:348b65f37c9586d8399508",
   measurementId: "G-3KLREPJMQZ"
 };
 // Initialize Firebase

 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

@NgModule({
   declarations: [			
      AppComponent,
      FooterComponent,
      BackgroundComponent,
      AchievementsComponent,
      ProjectsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
