import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _validationMSG : ValidationService) { }

  first_name = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z]{4,}$")
  ])

  last_name = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z]{4,}$")
  ])

  username = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z]{4,}$")
  ])

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])

  password = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z0-9]{8,}$")
  ])

  confirm = new FormControl('',[
    Validators.required,
    Validators.pattern("^[A-Za-z0-9]{8,}$")
  ])

  firstnameErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.first_name)
  }

  lastnameErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.last_name)
  }
  
  usernameErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.username)
  }

  emailErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.email)
  }

  passwordErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.password)
  }

  confirmErrorMsg(){
    return this._validationMSG.usernameErrorMessage(this.confirm)
  }







  register(): void{
    console.log(this.first_name.value)
    console.log(this.last_name.value)
    console.log(this.username.value)
    console.log(this.email.value)
    console.log(this.password.value)
    console.log(this.confirm.value)
  }

  ngOnInit() {
  }

}
