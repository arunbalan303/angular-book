import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
acno=""
psw=""


constructor(private router :Router,private ds:DataService)
{
}
  userDetails:any={
    1000:{acno:1000,username:"varun",password:123,balance:0},
    1001:{acno:1001,username:"arun",password:123,balance:0},
    1002:{acno:1002,username:"karun",password:123,balance:0},
    1003:{acno:1003,username:"tharun",password:123,balance:0}
  }
 // login()
  // {
  //   if(this.username.trim().length==0)
  //   {
  //      this.errormsg="the username is requied";
  //   }
  //   else if(this.password.trim().length==0)
  //   {
  //     this.errormsg="the password is required";

  //   }
  //   else{
  //     this.errormsg="";
  //     this.router.navigateByUrl('movie')
  //   }
  // }
  
  login()
  {
   
  
   var acno=this.acno
   var psw=this.psw
    var userDetails=this.userDetails
  console.log(acno);
 

  const result= this.ds.login(acno,psw)

  if (result) {
    alert('Login success')
    this.router.navigateByUrl('books')
  } else {
    alert('invalid user')
    

  }
}
registerin()
{
  this.router.navigateByUrl("register")
}
}

