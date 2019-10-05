import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: any;
  pswd: any;
  disable: any = true;
  constructor() { 
    
  }

  ngOnInit() {
  }

  goToHome() {
    this.email = document.getElementById('InputEmail');
    this.pswd = document.getElementById('InputPassword');
    if(this.email.value.indexOf('@') <= 0){
      this.disable = true;
    }
    else {
      if(this.email.value.indexOf('.com') <= 0) {
        this.disable = true;
      }
      else {
        for (var i = 0; i < this.pswd.value.length; i++) {
          var code = this.pswd.value.charCodeAt(i);
          if (code > 47 && code < 58 && this.pswd.value.length >= 2) {
              this.disable = false;
          }
          else if (code > 96 && code < 123 && this.pswd.value.length >= 2) { // lower alpha (a-z)
              this.disable = false;
          }
          else if (code > 64 && code < 91  && this.pswd.value.length >= 2) {// upper alpha (A-Z)
            this.disable = false;
          } 
          else
          this.disable = true; 
        }
      }
    }

  }

}
