import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports : [
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    exports : [
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule
    ]
})
export class Material { }