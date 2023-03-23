import { Component, OnInit } from '@angular/core';
import { SignInProcessService } from '../sign-in-process.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username ='';
  password ='';
  whileSigningIn(){
    // this.signInService.ensureSigning();
  }

  saveUserData(){
    // this.signInService.insertNewUser(this.username,this.password);
    // console.log(this.signInService.users)
  }
  
  constructor(private signInService : SignInProcessService) { }

  ngOnInit(): void {
  
  }

}
