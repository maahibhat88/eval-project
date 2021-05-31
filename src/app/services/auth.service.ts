import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


interface User {
  username: string;
  password: string;
}

let users = [ 
  {userid : "abc@media.com",password:"abc123","username":"tom"}, 
  {userid : "def@media.com",password:"def123","username":"dick"}
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); 

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: User){
    this.loggedIn.next(true);
    this.router.navigate(['/gallery']);
  }

  logout() {                      
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  checkCredentials(user: User){
    let result = users.find(el => el.userid == user.username && el.password == user.password );
    if(result !== undefined){
      return true;
    }else{
      return false;
    }
  }
}