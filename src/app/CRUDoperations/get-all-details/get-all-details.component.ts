import { Component, OnInit } from '@angular/core';
import { SignInProcessService } from '../../sign-in-process.service';
import { usersData } from '../../userDataInterface';

@Component({
  selector: 'app-get-all-details',
  templateUrl: './get-all-details.component.html',
  styleUrls: ['./get-all-details.component.css']
})
export class GetAllDetailsComponent implements OnInit {

 //newUsers : {username : string,password : string}[]  =[];
   
  newUsers !: usersData[];
 
  
  ngOnInit(): void {
  //  this.newUsers = this.signInService.users
  const getList = localStorage.getItem('userList');
  if(getList !==null){
  this.newUsers = JSON.parse(getList);
       }
  }
  constructor(private signInService : SignInProcessService) { }
}
