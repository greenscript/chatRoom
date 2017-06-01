import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  public items: FirebaseListObservable<any>;
  public name: any = '';
  public msgValue: string = '';
  public msgLink: string = '';
  public picture: string = '';
  public link: string = '';

  constructor(public afd: AngularFireDatabase, public afa: AngularFireAuth) {
    this.items = afd.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  };

  login() {
    let props = this;
    this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((response) => {
      let data = response.additionalUserInfo.profile;
      props.name = data.name;
      props.picture = data.picture;

      if (data.link) {
        props.link = data.link;
      } else {
        props.link = '';
      }

    },(error) => {
      console.log('reject');
    });

  }

  logout() {
    this.afa.auth.signOut();
    this.name = '';
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.name, picture: this.picture, link: this.link});
    this.msgValue = '';
  }

  shareLinkSend(sharedLink: string) {
    console.log(sharedLink);
    this.items.push({ name: this.name, picture: this.picture, link: this.link, sharedLink: sharedLink })
    this.msgLink = '';
  }
}
