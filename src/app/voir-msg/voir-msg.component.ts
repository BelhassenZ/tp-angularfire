import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-voir-msg',
  templateUrl: './voir-msg.component.html',
  styleUrls: ['./voir-msg.component.css']
})
export class VoirMsgComponent implements OnInit {

  private id: number;
  message: Observable<any>; 

  constructor(private route : ActivatedRoute,private db: AngularFireDatabase) {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.message = db.object('messages/'+this.id).valueChanges();
      //this.message = db.object(`messages/${this.id}`).subscribe((result) => console.log(result));

   }

  ngOnInit() {
  }

}
