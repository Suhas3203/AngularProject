import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersData } from '../userDataInterface';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  registrationData!: FormGroup;
  users!: usersData;
  hide = true;
  confHide = true;
  hints = true;
  hintsForPassword =true;

  toggleHintsForPassword(){
    this.hintsForPassword=!this.hintsForPassword;
  }
  
  toggleHints(){
    this.hints=!this.hints;
  }

  get lastNameInput(){
    return this.registrationData.controls['inputFormControlLname']
  }

  get firstNameInput(){
    return this.registrationData.controls['inputFormControlFname']
  }

  get usernameInput(){
    return this.registrationData.controls['username']
  }

  get passwordInput() {
    return this.registrationData.controls['password']
  }

  submitAllData() {    
    const filledData = localStorage.getItem('userList');
    this.users = {
      'email': this.registrationData.controls['emailFormControl'].value,
      'firstName': this.registrationData.value.inputFormControlFname,
      'lastName': this.registrationData.value.inputFormControlLname,
      'fullName': this.registrationData.value.inputFormControlFname + ' ' + this.registrationData.value.inputFormControlLname,
      'userName': this.registrationData.value.username,
      'passWord': this.registrationData.value.password

    }

    if (filledData !== null) {
     
      var arrNew: usersData[] = JSON.parse(filledData);
      arrNew.push(this.users);

      localStorage.setItem('userList', JSON.stringify(arrNew));
      console.warn('Registered Successfully...Proceed for Login');
    } 
    else {
      var arr:usersData[] = []
      arr.push(this.users)
      localStorage.setItem('userList', JSON.stringify(arr));
      console.warn('Registered Successfully first User...Proceed for Login');
    }

    this.router.navigate(['signIn']);
  }
  

  constructor(private fbuilder: FormBuilder, private router:Router) {
    this.registrationData = this.fbuilder.group({
      emailFormControl: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9]{3,20}@[a-z]{2,8}.com')]),
      inputFormControlFname: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern('[A-Z]{1}[a-z]{2,10}')]),
      inputFormControlLname: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern('[A-Z]{1}[a-z]{2,10}')]),
      username: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9_-]{8,15}$')]),  // ^[a-z0-9]{8,15}
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z0-9!@#$%^&*-]{8,20}')]),
      confirmPassword: new FormControl('',[Validators.required])
    },
    {
      validators: this.MustMatch('password','confirmPassword'),
    });
  
   }

    MustMatch(controlName: string, matchingControlName: string){
      return (formGroup : FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if(matchingControl.errors && !matchingControl.errors['MustMatch']){
          return 
        }
        if(control.value != matchingControl.value){
          matchingControl.setErrors({MustMatch: true});
        }
        else{
          matchingControl.setErrors(null);
        }
      }
    }

    ngOnInit(): void {
    
    }
  }








  // emailId='';
  // fname='';
  // lname='';
  // userN='';
  // passW='';

  // users: usersData={
  //   email : this.emailId,
  //   firstName: this.fname,
  //   lastName: this.lname,
  //   fullName: this.fname + this.lname,
  //   userName: this.userN,
  //   passWord:this.passW
  // }
