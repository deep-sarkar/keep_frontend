import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snack:MatSnackBar) { }

  matMessage(message:string){
    return this._snack.open(message, "ok", {duration:5000})
  }

}
