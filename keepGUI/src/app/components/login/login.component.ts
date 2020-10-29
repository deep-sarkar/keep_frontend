import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _accountService:AccountService,
    private _validationMessage:ValidationService,
    private _utility:UtilityService
    ) { }

  username = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z]{4,}$")
  ])

  password = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z0-9]{8,}$")
  ])

  validateUsername(){
    return this._validationMessage.usernameErrorMessage(this.username)
  }
  
  validatePassword(){
    return this._validationMessage.passwordErrorMessage(this.password)
  }


  login(){
    const data = {
      "username": this.username.value,
      "password": this.password.value
    }
    this._accountService.login(data)
    .subscribe(
      response =>{
       if(response.code === 200){
         localStorage.setItem(this.username.value, response.token)
         this._utility.matMessage("Hello, " + this.username.value )
       }
      },
      error =>{
        console.log("error",error)
      }
    )
  }

  ngOnInit() {
  }

}
