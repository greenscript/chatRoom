import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAOGpPTL47GC1UhpiO__qPygW3bnOMH-6U",
  authDomain: "diegoschatapp.firebaseapp.com",
  databaseURL: "https://diegoschatapp.firebaseio.com",
  projectId: "diegoschatapp",
  storageBucket: "diegoschatapp.appspot.com",
  messagingSenderId: "494098892871"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
