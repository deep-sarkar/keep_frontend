import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  usernameErrorMessage(username){
    return username.hasError('required')?"Required" : 
      username.hasError('pattern') ? "atleast 4 charecter and alphabet only.":"";
  }

  passwordErrorMessage(password){
    return password.hasError('required') ? "Required" : 
      password.hasError('pattern') ? "atleast 8 charecter and alpha-numeric only.":"";
  }

  emailErrorMessage(email){
    return email.hasError('required')?"Required" :
      email.hasError('email') ? "invalid email address" : "verify email after registeration";
  }

}
