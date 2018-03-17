import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';

import { AppComponent } from './app.component';
import { VoirMsgComponent } from './voir-msg/voir-msg.component';
import { GererMsgComponent } from './gerer-msg/gerer-msg.component';

const appRoutes: Routes = [
  { path: 'voirMsg/:id', component: VoirMsgComponent },
  { path: 'accueil', component: GererMsgComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
];

var config = {
  apiKey: "AIzaSyCh5NhgA47Go-ijASOCL5NJy06o1uka_TI",
  authDomain: "tp-angularfire-c92ac.firebaseapp.com",
  databaseURL: "https://tp-angularfire-c92ac.firebaseio.com",
  projectId: "tp-angularfire-c92ac",
  storageBucket: "tp-angularfire-c92ac.appspot.com",
  messagingSenderId: "977352825843"
};

@NgModule({
  declarations: [
    AppComponent,
    VoirMsgComponent,
    GererMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
