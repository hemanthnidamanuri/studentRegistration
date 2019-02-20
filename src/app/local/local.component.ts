import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor(private router: Router, private localStorage: LocalStorage){
  }

  email; firstname; lastname; dateofbirth; mobileno; seq; sans;
  ngOnInit() {
    this.localStorage.getItem('user').subscribe((user) => {
      this.email = user.email;
      this.firstname = user.fname;
      this.lastname = user.lname;
      this.dateofbirth = user.dob;
      this.mobileno = user.mob;
      this.seq = user.seq;
      this.sans = user.sans;

    });
  }

}
