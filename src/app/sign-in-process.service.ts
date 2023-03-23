import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { usersData } from './userDataInterface';

@Injectable({
  providedIn: 'root'
})
export class SignInProcessService implements OnInit {

//  private destinationUrl = 'https://mariadb.com/kb/en/json-sample-files/#expensejson';
 

  // ensureSigning() {
  //   alert("You're signing in...");
  // }

  // showAllJsonData() { }


  //constructor(private http: HttpClient) { }
  constructor() {
 //   localStorage.setItem('userList', JSON.stringify(this.users));
  }
  // email: string='';
  // firstName: string='';
  // lastName: string='';
  // fullName: string='';
  // username: string='';
  // password: string='';
  
  ngOnInit(): void {
  
  }
}


// users = [
//   {
//     username: 'suhas3203',
//     password: 'Suhas@123'
//   },
//   {
//     username: 'abc12345',
//     password: '321@newPerson'
//   },
//   {
//     username: 'vsad@4321',
//     password: 'Fascinate#123'
//   },
//   {
//     username: 'sbd$9870',
//     password: 'D@123242'
//   },
//   {
//     username: 'webster@2111',
//     password: 'new@439021'
//   }
// ]



// insertNewUser(username: string, password: string) {
//   this.users.push({ username: username, password: password });
//   console.log(username + ' ' + password);
// }