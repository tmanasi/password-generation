import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit  {

  SignupForm!:FormGroup;
  value="ghghj"
  display: any;
  password!: string;
  isDisabled=false
  constructor() {
   
  }

  ngOnInit(): void {
  
    this.SignupForm = new FormGroup({
      
          'userId':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
          'time':new FormControl(null,Validators.required),
          'date':new FormControl(null,Validators.required),
    });
    this.SignupForm.setValue({
        'userId':'',
        'time':'',
        'date':''
    
    })
  }

  onSubmit(){
    console.log(this.SignupForm);
    this.password=this.generatePwd();
    this.timer();
  }

  timer() {
    let seconds: number = 30;
    let textSec: any = "0";
    let statSec: number = 30;

    const prefix = "0";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 30;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      this.isDisabled=true;
      if (seconds == 0) {
        this.isDisabled=false;
        console.log("finished");
        clearInterval(timer);
      }
    },1000);
  }

  generatePwd() {
    let result = '';
    const chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'
    for (let i = 8; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

}
