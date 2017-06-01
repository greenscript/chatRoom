import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SafePipe } from './pipes/safe.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { MomentModule } from 'angular2-moment';

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
    AppComponent,
    SafePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
