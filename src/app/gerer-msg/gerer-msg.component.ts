import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gerer-msg',
  templateUrl: './gerer-msg.component.html',
  styleUrls: ['./gerer-msg.component.css']
})
export class GererMsgComponent implements OnInit {

  ngOnInit(): void {
    // for (let entry of this.messages) {
    // console.log(entry.id);
    // }
  }
  description: Observable<any>;
  messages: Observable<any[]>;

  email: string;
  objet: string;
  text: string;

  constructor(private db: AngularFireDatabase) {
    //this.description = db.object('description').valueChanges();
    this.messages = db.list('messages').snapshotChanges().map(actions => {
    return actions.map(a => {
      const data = a.payload.val();
      const id = a.payload.key;
      return {id, ...data};
    })
    });  
  }

  ajouterMsg() {
    this.db.list('messages').push({email : this.email, objet : this.objet, text : this.text});
  }

  supprimerMsg(id: string){
    this.db.list('messages').remove(id);
  }

  voirMsg(id: string){
    
  }

}
