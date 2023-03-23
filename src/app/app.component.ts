import { Component, OnInit } from '@angular/core';
import { SignInProcessService } from './sign-in-process.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',                           
  styleUrls: ['./app.component.css'],
  providers:[SignInProcessService]
})
export class AppComponent implements OnInit {
  title = 'Tourism';

  pageTitle = 'Tourism Places In India';
  isOpen =false;

  toggleToShowComponent() {
    this.isOpen =!this.isOpen;
  
  }

  showAllJson(){
  //  this.signInService.showAllJsonData();
  }

  toShowLocalStorage(){
    const data= localStorage.getItem('userList');
    console.log(data);
  }
  constructor(private signInService : SignInProcessService) { }

  ngOnInit(): void {
  //  localStorage.setItem('userList', JSON.stringify(this.signInService.users));
      
  }
}
