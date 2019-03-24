import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyD_MITKDqmO_cca1C6b_jxd5bLVqRI3we8',
    authDomain: 'blogangopen2.firebaseapp.com',
    databaseURL: 'https://blogangopen2.firebaseio.com',
    projectId: 'blogangopen2',
    storageBucket: 'blogangopen2.appspot.com',
    messagingSenderId: '12634638754'
  };
  firebase.initializeApp(config);
}
}
