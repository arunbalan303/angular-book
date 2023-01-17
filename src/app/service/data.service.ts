import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 currentuser=""

  constructor(private router:Router) {
     this.get()
   }

  valid()
{  if(this.userDetails)
  {
  localStorage.setItem('database',JSON.stringify(this.userDetails))
  }
  if(this.currentuser)
  {
  localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
  }
}
get()
{
  if(localStorage.getItem('database'))
  {
    this.currentuser=JSON.parse(localStorage.getItem('currentuser') || "")
  }
  if(localStorage.getItem('currentuser'))
  {
    this.currentuser=JSON.parse(localStorage.getItem('currentuser') || "")
  }
}
userDetails:any={
  1000:{acno:1000,username:"Varun",password:123},
  1001:{acno:1001,username:"Arun",password:123},
  1002:{acno:1002,username:"Karun",password:123},
  1003:{acno:1003,username:"Tharun",password:123}
}
 register(acno:any,uname:any,psw:any)
 {
  var userDetails = this.userDetails
  if (acno in userDetails) {
    return false
     }
  else {
    userDetails[acno] = { acno, username: uname, password: psw }
    return true
       }
 }
 login(acno:any,psw:any)
  {
  
  
    var userDetails=this.userDetails

    if (acno in userDetails) 
    {if (psw==userDetails[acno]["password"]) 
    {  this.currentuser=userDetails[acno]["username"]
      this.valid()
      // this.get()
    
     return true
    } 
    else 
    {
    return false
   
    }
      
    } 
    else 
    {
      return false
    }
  }


  
  logout()

  {
    this.router.navigateByUrl('')
  }
}
