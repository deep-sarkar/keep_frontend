import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    imports : [
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSnackBarModule
    ],
    exports : [
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSnackBarModule
    ]
})
export class Material { }