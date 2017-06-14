import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styles : ['.example-form {  width: 500px;}', '.example-full-width {  width: 100%;}']
    
})

export class LoginComponent { 
    form: FormGroup;

    username = new FormControl("", Validators.required);

    constructor(private _fb: FormBuilder, 
                private _router: Router,
                private _route: ActivatedRoute,
                public dialog: MdDialog) {

        

        this.form = _fb.group({
            "username": this.username,
            "password":["", Validators.required]
        });
    }

    login(): void {

        this._router.navigate(['/test']);
        
    }

}
