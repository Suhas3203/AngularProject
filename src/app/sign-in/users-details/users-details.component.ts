import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})

export class UsersDetailsComponent implements OnInit {

  private _userInputName='';
  private _userInputPassword='';
   set userInputName(userInputName:string){
     this.userInputName = userInputName;
   }
   set userInputPassword( userInputPassword:string){
     this.userInputPassword = userInputPassword
   }
   get userInputName():string {
      return this.userInputName;
   }
   get userInputPassword():string {
    return this.userInputPassword;
 }

  constructor() { }

  // constructor(userInputName : string, userInputPassword: string){
  //     this.userInputName =this.userInputName;
  //     this.userInputPassword =this.userInputPassword;
  // }
  ngOnInit(): void {
  }

}
